import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffsComponent } from './staffs/staffs.component';
import { PrescriptionListComponent } from './doctor/prescription-list/prescription-list.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'prescriptions', component:PrescriptionListComponent},
  {path:'staffs', component:StaffsComponent},
  {path:'stafflist',component:StaffListComponent},
  {path:'staff',component:StaffComponent},
  {path:'patient',component:PatientComponent},
  {path:'patientlist',component:PatientListComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'appointment/:appId',component:AppointmentComponent},
  {path:'appointments',component:AppointmentsComponent},
  { path: 'patient/:PatientId', component: PatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
