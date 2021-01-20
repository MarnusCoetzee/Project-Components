import { AuthService } from './../../../../../core/services/auth/auth.service';
import { SnackbarService } from './../../../../../core/services/snackbar/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { regex } from '@app/features/shared/utils';
@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss'],
})
export class ChangePasswordDialogComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  regex = regex;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private dialogref: MatDialogRef<ChangePasswordDialogComponent>,
    private notify: SnackbarService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      email: [
        null,
        { validators: [Validators.required, Validators.pattern(regex.email)] },
      ],
    });
  }

  onClickChangePassword() {
    if (this.form.valid) {
      const value = this.form.value;
      const email = value.email;
      this.loading = true;
      try {
        this.authService.resetPassword(email).then(() => {
          this.loading = false;
          this.dialogref.close();
        });
      } catch (error) {
        this.notify.error('An error has occurred');
        this.loading = false;
        return;
      }
    }
  }

  onClickCloseDialog() {
    this.dialogref.close();
  }
}
