import { BottomNavModule } from './../components/bottom-nav/bottom-nav.component';
import { ForgotPasswordModule } from './../login/forgot-password/forgot-password.component';
import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    ForgotPasswordModule,
    BottomNavModule,
  ],
})
export class DashboardModule {}
