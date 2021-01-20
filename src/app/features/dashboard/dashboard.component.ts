import { ChangePasswordDialogComponent } from './../login/forgot-password/components/change-password-dialog/change-password-dialog.component';
import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  onClickLogout() {
    this.authService.currentUserSignout();
  }
}
