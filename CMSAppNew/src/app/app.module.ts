import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PrescribeService } from './shared/prescribe.service';
import { StaffService } from './shared/staff.service';
import { PatientService } from './shared/patient.service';
import { LabtestsService } from './shared/labtests.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MedicinesComponent } from '../app/medicines/medicines.component';
import { MedicineListComponent } from '../app/medicines/medicine-list/medicine-list.component';
import { MedicineService } from './shared/medicine.service';
import { DoctorComponent } from  './doctor/doctor.component';
import { PrescriptionListComponent} from './doctor/prescription-list/prescription-list.component';
import { LabtestsComponent} from './labtests/labtests.component';
import { LabtestListComponent } from './labtests/labtest-list/labtest-list.component';
import  {PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientListComponent} from './patients/patient-list/patient-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffsComponent,
    StaffComponent,
    StaffListComponent,
    MedicinesComponent,
    MedicineListComponent,
    DoctorComponent,
    PrescriptionListComponent,
    LabtestsComponent,
    LabtestListComponent,
    PatientsComponent,
    PatientComponent,
    PatientListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [MedicineService,LabtestsService, PrescribeService,StaffService,PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
