import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicineListComponent } from './medicines/medicine-list/medicine-list.component';
import{MedicineService} from './shared/medicine.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LabtestsComponent } from './labtests/labtests.component';
import { LabtestListComponent } from './labtests/labtest-list/labtest-list.component';
import { LabtestsService } from './shared/labtests.service'
import { DoctorComponent } from './doctor/doctor.component';
import { PrescriptionListComponent } from './doctor/prescription-list/prescription-list.component';
import { RouterModule } from '@angular/router';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PrescribeService } from './shared/prescribe.service';
import { StaffService } from './shared/staff.service';

@NgModule({
  declarations: [ MedicinesComponent,
    MedicineListComponent,
    AppComponent,
    LabtestsComponent,
    LabtestListComponent,
    DoctorComponent,
    PrescriptionListComponent,
    StaffsComponent,
    StaffComponent,
    StaffListComponent
   
  ],
  imports: [
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MedicineService,LabtestsService, PrescribeService,StaffService],
 bootstrap: [AppComponent]
})
export class AppModule { }
