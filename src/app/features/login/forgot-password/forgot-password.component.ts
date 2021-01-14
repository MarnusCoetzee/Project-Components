import { ChangePasswordDialogComponent } from './components/change-password-dialog/change-password-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { Component, OnInit, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onClickOpenDialog() {
    this.dialog.open(ChangePasswordDialogComponent);
  }
}

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  exports: [ForgotPasswordComponent],
})
export class ForgotPasswordModule {}
