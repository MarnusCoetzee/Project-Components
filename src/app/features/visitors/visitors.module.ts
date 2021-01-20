import { LoadingSpinnerModule } from './../components/loading-spinner/loading-spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorsRoutingModule } from './visitors-routing.module';
import { VisitorsComponent } from './visitors.component';
import { JoinPageComponent } from './components/join-page/join-page.component';
import { FinishPageComponent } from './components/finish-page/finish-page.component';

@NgModule({
  declarations: [VisitorsComponent, JoinPageComponent, FinishPageComponent],
  imports: [
    CommonModule,
    VisitorsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingSpinnerModule,
  ],
})
export class VisitorsModule {}
