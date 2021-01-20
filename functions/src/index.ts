import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as axios from 'axios';
admin.initializeApp();
import { firestore } from 'firebase-admin';
const db = admin.firestore();

// Create a basic user in the DB after first sign up
export const createBasicUserInDatabaseCollection = functions.auth
  .user()
  .onCreate((user, context) => {
    const userRef = db.doc(`users/${user.uid}`);
    return userRef.set({
      uid: user.uid,
      created: firestore.FieldValue.serverTimestamp(),
    });
  });

// export const sendMessageToSlack = functions.https.onRequest(
//   async (req, res) => {
//     const SLACK_URL =
//       'https://hooks.slack.com/services/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';
//     const message = {
//       text: 'A New Visitor Is At The Door!',
//     };
//     return
//   }
// );

export const notifyStaffAboutVisitorAtDoor = functions.firestore
  .document('meetings')
  .onCreate((snapshot, context) => {
    const SLACK_URL =
      'https://hooks.slack.com/services/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/?';

    return axios.default.post(SLACK_URL);
  });
