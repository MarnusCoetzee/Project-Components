import { AuthService } from './../../../core/services/auth/auth.service';
import {
  LoadingSpinnerComponent,
  LoadingSpinnerModule,
} from './../../components/loading-spinner/loading-spinner.component';
import { ForgotPasswordModule } from './../forgot-password/forgot-password.component';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
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
  signInForm: FormGroup;
  regex = regex;
  hide = true;
  // @ts-ignore
  isLoading: boolean;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.signInForm = this.fb.group({
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

  onClickLogout() {
    if (this.signInForm.valid) {
      this.isLoading = true;
      const value = this.signInForm.value;
      const email = value.email;
      const password = value.password;
      try {
        this.authService
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.isLoading = false;
          })
          .catch(() => {
            this.isLoading = false;
            return;
          });
      } catch {
        console.log('error');
      }
    }
  }

  onClickChangePassword() {}
}

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    ForgotPasswordModule,
    LoadingSpinnerModule,
  ],
  exports: [SignInComponent],
})
export class SignInModule {}
