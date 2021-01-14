import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { MainNavComponent } from './main-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainNavComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [MainNavComponent],
})
export class MainNavModule {}
