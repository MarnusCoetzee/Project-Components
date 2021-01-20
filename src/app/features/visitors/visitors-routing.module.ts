import { FinishPageComponent } from './components/finish-page/finish-page.component';
import { JoinPageComponent } from './components/join-page/join-page.component';
import { VisitorsComponent } from './visitors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VisitorsComponent,
    children: [
      {
        path: '',
        redirectTo: 'join',
        pathMatch: 'full',
      },
      {
        path: 'join',
        component: JoinPageComponent,
      },
      {
        path: 'finish',
        component: FinishPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorsRoutingModule {}
