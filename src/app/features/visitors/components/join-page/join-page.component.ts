import { Visitor } from './../../../../core/models/backend/visitor/index';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from './../../../../core/services/database/database.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss'],
})
export class JoinPageComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  hasCovidExposure: boolean = false;
  hasCovidSymptoms: boolean = false;

  loading: boolean = false;

  options: any = [
    {
      id: 1,
      value: 'Developer Meeting',
    },
    {
      id: 2,
      value: 'Consultation',
    },
    {
      id: 3,
      value: 'Project Update',
    },
    {
      id: 4,
      value: 'Project Demonstration',
    },
  ];

  offices: any = [
    {
      id: 1,
      value: 'Specno',
    },
    {
      id: 2,
      value: 'Mint Kulca',
    },
  ];

  staff: any = [
    {
      id: 1,
      value: 'Brandon Watkins',
    },
    {
      id: 2,
      value: 'Ruan Visser',
    },
    {
      id: 2,
      value: 'Steph Goode',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private dbService: DatabaseService,
    private afs: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      firstName: [null, { validators: [Validators.required] }],
      lastName: [null, { validators: [Validators.required] }],
      email: [null, { validators: [Validators.required] }],
      visitReason: [null, { validators: [Validators.required] }],
      companyVisited: [null, { validators: [Validators.required] }],
      staffMemberVisited: [null, { validators: [Validators.required] }],
    });
  }

  handleSaveVisitorToDatabase() {
    if (this.form.valid && !this.hasCovidExposure && !this.hasCovidSymptoms) {
      this.loading = true;
      const value = this.form.value;
      const visitorId = this.afs.createId();
      const visitor: Visitor = {
        visitorId,
        email: value.email,
        firstName: value.firstName,
        lastName: value.lastName,
        hasCovid: this.hasCovidExposure,
        hasSymptoms: this.hasCovidSymptoms,
        createdAt: Date.now(),
        officeId: '123',
        organisationId: '234',
        organisationName: 'Specno',
        personOfContactId: '22',
        personOfContactName: value.staffMemberVisited,
        visitorReason: value.visitReason,
      };
      try {
        this.dbService.saveVisitorToDatabase(visitor).then(() => {
          this.loading = false;
        });
      } catch (error) {
        console.log(error);
        this.loading = false;
        return;
      }
    }
  }
}
