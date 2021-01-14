import { ForgotPasswordModule } from './forgot-password/forgot-password.component';
import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { SignUpModule } from './sign-up/sign-up.component';
import { SignInModule } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ChangePasswordDialogComponent } from './forgot-password/components/change-password-dialog/change-password-dialog.component';

@NgModule({
  declarations: [LoginComponent, ChangePasswordDialogComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SignInModule,
    SignUpModule,
    AngularMaterialModule,
    ForgotPasswordModule,
  ],
})
export class LoginModule {}
