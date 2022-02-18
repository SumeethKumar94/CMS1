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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdminComponent } from './admin/admin.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicineComponent } from './medicines/medicine/medicine.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { AppointmentlistComponent } from './appointments/appointmentlist/appointmentlist.component';
import { LabtestComponent } from './labtests/labtest/labtest.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { LabtechnavComponent } from './labtechnician/labtechnav/labtechnav.component';
import { DoctornavComponent } from './doctor/doctornav/doctornav.component';
import { ReceptionistnavComponent } from './receptionist/receptionistnav/receptionistnav.component';
import { LabreportComponent } from './labtests/labreport/labreport.component';
import { AddreportComponent } from './labtests/addreport/addreport.component';
import { PrescriptionlabListComponent } from './doctor/prescriptionlab-list/prescriptionlab-list.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { PharmacistnavComponent } from './pharmacist/pharmacistnav/pharmacistnav.component';
import { DoctorappointmentlistComponent } from './appointments/doctorappointmentlist/doctorappointmentlist.component';
import { AppointmentService } from './shared/appointment.service';
import { BillingComponent } from './billing/billing.component';
import { PharmacyBillingComponent } from './billing/pharmacy-billing/pharmacy-billing.component';
import { ReceptionComponent } from './billing/reception/reception.component';
import { AllappointemntsComponent } from './appointments/allappointemnts/allappointemnts.component';

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
    LoginComponent,
    AppointmentsComponent,
    AppointmentComponent,
    AppointmentlistComponent,
    ReceptionistComponent,
    LabtestComponent,
    AdminComponent,
    ReceptionistComponent,
    MedicineComponent,
    AdminNavComponent,
    LabtechnicianComponent,
    LabtechnavComponent,
    DoctornavComponent,
    ReceptionistnavComponent,
    LabreportComponent,
    AddreportComponent,
    PrescriptionlabListComponent,
    PharmacistComponent,
    PharmacistnavComponent,
    DoctorappointmentlistComponent,
    BillingComponent,
    PharmacyBillingComponent,
    ReceptionComponent,
    PharmacyBillingComponent,
    AllappointemntsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [MedicineService,LabtestsService, PrescribeService,StaffService,PatientService,AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
