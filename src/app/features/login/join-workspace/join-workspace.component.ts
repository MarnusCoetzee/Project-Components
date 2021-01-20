import {
  LoadingSpinnerComponent,
  LoadingSpinnerModule,
} from './../../components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './../../shared/angular-material/angular-material.module';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
interface Office {
  id: string;
  name: string;
}
@Component({
  selector: 'app-join-workspace',
  templateUrl: './join-workspace.component.html',
  styleUrls: ['./join-workspace.component.scss'],
})
export class JoinWorkspaceComponent implements OnInit {
  loading: boolean = false;
  // @ts-ignore
  officesSelectForm: FormGroup;
  // @ts-ignore
  offices: Office[] = [
    {
      id: '1',
      name: 'Parc du Cap',
    },
    {
      id: '2',
      name: 'Tygervallei Square',
    },
    {
      id: '3',
      name: 'Tyger Waterfront',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [JoinWorkspaceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LoadingSpinnerModule,
  ],
  exports: [JoinWorkspaceComponent],
})
export class JoinWorkSpaceModule {}
