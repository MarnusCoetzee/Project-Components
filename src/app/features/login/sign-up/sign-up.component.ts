import { ForgotPasswordModule } from './../forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule],
  exports: [SignUpComponent],
})
export class SignUpModule {}
