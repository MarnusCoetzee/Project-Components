import { AngularMaterialModule } from './features/shared/angular-material/angular-material.module';
import { SnackbarService } from './core/services/snackbar/snackbar.service';
import { LoadingSpinnerModule } from './features/components/loading-spinner/loading-spinner.component';
import { FirebaseModule } from './features/shared/firebase/firebase.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FirebaseModule,
    LoadingSpinnerModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
