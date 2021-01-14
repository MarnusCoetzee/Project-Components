import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireAnalyticsModule,
  UserTrackingService,
} from '@angular/fire/analytics';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../../../../environments/environment.prod';

@NgModule({
  declarations: [],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireModule.initializeApp(
      environment.config.firebase,
      'specno-skeleton'
    ),
    AngularFirestoreModule.enablePersistence(),
    AngularFireFunctionsModule,
  ],
  exports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
  ],
  providers: [UserTrackingService],
})
export class FirebaseModule {}
