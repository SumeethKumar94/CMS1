import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import{PatientService} from './shared/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
=======
import { StaffsComponent } from './staffs/staffs.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from 'ngx-http-client';
>>>>>>> 08e16812546e3a8c3bcfd397be8114b8a8beb305

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PatientsComponent,
    PatientComponent,
    PatientListComponent
=======
    StaffsComponent,
    StaffComponent,
    StaffListComponent
   
>>>>>>> 08e16812546e3a8c3bcfd397be8114b8a8beb305
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
=======
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule
>>>>>>> 08e16812546e3a8c3bcfd397be8114b8a8beb305
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
