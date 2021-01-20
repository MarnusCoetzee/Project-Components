import { NotificationComponent } from '../../../features/components/notification/notification.component';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  error(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 2000,
      data: { message },
      panelClass: ['mat-snackbar_error'],
    });
  }

  success(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 2000,
      data: { message },
      panelClass: ['mat-snackbar_success'],
    });
  }
}
