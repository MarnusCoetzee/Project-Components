import { MainNavModule } from './../components/main-nav/main-nav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, MainNavModule],
})
export class DemoModule {}
