import { ForgotPasswordModule } from './../forgot-password/forgot-password.component';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { AppModule } from './../../../app.module';
import { Component, OnInit, NgModule } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { regex } from '../../shared/utils';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  regex = regex;
  hide = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      email: [
        null,
        { validators: [Validators.required, Validators.pattern(regex.email)] },
      ],
      password: [
        null,
        {
          validators: [
            Validators.required,
            Validators.pattern(regex.password),
            Validators.minLength(6),
          ],
        },
      ],
    });
  }
}

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    ForgotPasswordModule,
  ],
  exports: [SignInComponent],
})
export class SignInModule {}
