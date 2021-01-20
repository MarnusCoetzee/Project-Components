import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [BottomNavComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [BottomNavComponent],
})
export class BottomNavModule {}
