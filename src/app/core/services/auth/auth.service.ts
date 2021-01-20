import { User } from './../../models/backend/user/index';
import { DatabaseService } from './../database/database.service';
import { SnackbarService } from './../snackbar/snackbar.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  switchMap,
  take,
  tap,
  share,
  mergeMap,
  takeUntil,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private snack: SnackbarService,
    private router: Router
  ) {
    this.user$ = afAuth.authState.pipe(
      // @ts-ignore
      mergeMap((firebaseUser) => {
        if (firebaseUser) {
          return this.db.doc<User>(`users/${firebaseUser.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
      share()
    );
  }

  async signUpWithEmailAndPassword(email: string, password: string) {
    try {
      await this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigate(['dashboard']);
        })
        .then(() => {
          this.snack.success('Successfully created your account');
        });
    } catch (error) {
      this.snack.error('An error has occurred');
      return;
    }
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      await this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigate(['dashboard']);
        })
        .then(() => {
          this.snack.success('Successfully logged in');
        });
    } catch (error) {
      this.snack.error('An error has occurred' + error);
      return;
    }
  }

  async currentUserSignout() {
    try {
      await this.afAuth
        .signOut()
        .then(() => {
          this.router.navigate(['login']);
        })
        .then(() => {
          this.snack.success('Logged out');
        });
    } catch (err) {
      this.snack.error('An error has occurred' + err);
      return;
    }
  }

  async resetPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email).then(() => {
        this.snack.success('A password reset email has been sent to ' + email);
      });
    } catch (err) {
      this.snack.error('An error has occurred' + err);
      return;
    }
  }
}
