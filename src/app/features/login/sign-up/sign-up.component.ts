import { AuthService } from './../../../core/services/auth/auth.service';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoadingSpinnerModule } from './../../components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { regex } from '@app/features/shared/utils';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  // @ts-ignore
  isLoading: boolean;
  // @ts-ignore
  signupForm: FormGroup;
  regex = regex;
  hide: boolean = true;
  hideConfirm: boolean = true;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.signupForm = this.fb.group(
      {
        email: [
          null,
          {
            validators: [
              Validators.required,
              Validators.maxLength(128),
              Validators.pattern(regex.email),
            ],
          },
        ],
        password: [
          null,
          {
            validators: [
              Validators.required,
              Validators.minLength(6),
              Validators.pattern(regex.password),
            ],
          },
        ],
        confirmPassword: [
          null,
          {
            validators: [
              Validators.required,
              Validators.minLength(6),
              Validators.pattern(regex.password),
            ],
          },
        ],
      },
      { validator: this.confirmPasswordValidator }
    );
  }

  private confirmPasswordValidator(
    group: FormGroup
  ): { [key: string]: boolean } {
    const password = group.get('password');
    const confirm = group.get('confirmPassword');
    // @ts-ignore
    return confirm.value && password.value !== confirm.value
      ? { repeat: true }
      : null;
  }

  onClickSubmitCreateProfile() {
    if (this.signupForm.valid) {
      const value = this.signupForm.value;
      const email = value.email;
      const password = value.password;
      this.isLoading = true;
      this.authService
        .signUpWithEmailAndPassword(email, password)
        .then(() => {
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          return;
        });
    }
  }
}

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    LoadingSpinnerModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [SignUpComponent],
})
export class SignUpModule {}
