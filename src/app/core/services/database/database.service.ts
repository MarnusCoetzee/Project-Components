import { AngularFireAuth } from '@angular/fire/auth';
import { Office } from './../../models/backend/office/index';
import { BoardRoom } from './../../models/backend/boardroom/index';
import { Booking } from './../../models/backend/booking/index';
import { Router } from '@angular/router';
import { SnackbarService } from './../snackbar/snackbar.service';
import { Visitor } from './../../models/backend/visitor/index';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(
    private db: AngularFirestore,
    private notify: SnackbarService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  async saveVisitorToDatabase(visitor: Visitor) {
    await this.db
      .collection('visitors')
      .doc(visitor.visitorId)
      .set({ visitor: visitor })
      .then(() => {
        this.notify.success('Welcome to our offices!');
      })
      .then(() => {
        this.router.navigate(['visitors/finish']);
      })
      .catch(() => {
        this.notify.error('An error has occurred, please try again');
        return;
      });
  }

  //#region
  /**
   * Bookings read, create, update & delete,
   */

  /**
   * Returns all bookings made by a user where the user is the person who created the meeting
   */
  async readOwnBookingsMadeFromDatabase() {
    await this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Booking>('bookings', (ref) =>
              ref.where('hostId', '==', user.uid).orderBy('createdAt', 'desc')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  /**
   * Returns all upcoming meetings that a user will have on their calendar
   */
  async readUpcomingMeetings() {
    await this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Booking>('bookings', (ref) =>
              ref
                .where('attendeeIds', 'array-contains', user.uid)
                .orderBy('createdAt', 'desc')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  async readAllBookingsMadeForOffice(office: Office) {
    await this.db.collection('bookings', (ref) =>
      ref.where('officeId', '==', office.officeId).orderBy('createdAt', 'desc')
    );
  }

  async createNewBooking(booking: Booking) {
    await this.db
      .collection('bookings')
      .doc(booking.bookingId)
      .set({ booking })
      .then(() => {
        this.notify.success('Successfully Created Booking');
      })
      .catch((err) => {
        console.log(err);
        this.notify.error('An error has occurred, please try again');
        return;
      });
  }

  async updateBooking(booking: Booking) {
    await this.db
      .collection('bookings')
      .doc(booking.bookingId)
      .update({ booking })
      .then(() => {
        this.notify.success('Successfully Updated Booking');
      })
      .catch((err) => {
        console.log(err);
        this.notify.error('An error has occurred, please try again');
        return;
      });
  }

  async deleteBooking(booking: Booking) {
    await this.db
      .collection('bookings')
      .doc(booking.bookingId)
      .delete()
      .then(() => {
        this.notify.success('Successfully Deleted Booking');
      })
      .catch((err) => {
        console.log(err);
        this.notify.error('An error has occurred, please try again');
        return;
      });
  }

  //#endregion

  //#region

  /**
   * Boardroom read, create, Update & Delete
   */

  /**
   * Read all boardrooms that belong to a office
   */

  async createNewBoardRoom(boardroom: BoardRoom) {
    await this.db
      .collection('boardrooms')
      .doc(boardroom.boardroomId)
      .set(boardroom)
      .then(() => {
        this.notify.success('Successfully Created Boardroom');
      })
      .catch((error) => {
        console.log(error);
        this.notify.error('An error has occurred, please try again');
        return;
      });
  }

  async updateBoardRoom(boardroom: BoardRoom) {
    await this.db
      .collection('boardrooms')
      .doc(boardroom.boardroomId)
      .update(boardroom)
      .then(() => {
        this.notify.success('Successfully Updated Boardroom');
      })
      .catch((error) => {
        console.log(error);
        this.notify.error('An error has occurred, please try again');
        return;
      });
  }

  async deleteBoardRoom(boardroom: BoardRoom) {
    await this.db
      .collection('boardrooms')
      .doc(boardroom.boardroomId)
      .delete()
      .then(() => {
        this.notify.success('Successfully Deleted Boardroom');
      })
      .catch((error) => {
        console.log(error);
        this.notify.error('An error has occurred, please try again');
        return;
      });
  }

  //#endregion

  //#region
  /**
   * Create, Update & Delete Office
   */
  async createNewOffice(office: Office) {}
}
