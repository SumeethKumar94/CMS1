import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabtestListComponent } from './labtests/labtest-list/labtest-list.component';
import { LoginComponent } from './login/login.component';
import { MedicineListComponent } from './medicines/medicine-list/medicine-list.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffsComponent } from './staffs/staffs.component';
import { PrescriptionListComponent } from './doctor/prescription-list/prescription-list.component';
import { MedicineComponent } from './medicines/medicine/medicine.component';
import { PatientComponent } from './patients/patient/patient.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LabtestComponent } from './labtests/labtest/labtest.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component'
import { AppointmentlistComponent } from './appointments/appointmentlist/appointmentlist.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'doctor', component:DoctorComponent},
  {path:'admin', component:AdminComponent},
  {path:'receptionist',component:ReceptionistComponent},
  {path:'pharmacist', component:MedicineListComponent},
  {path:'labtestlist', component:LabtestListComponent},
  {path:'labtest', component:LabtestComponent},
  {path:'labtest/:LabTestId', component:LabtestComponent},
  {path:'prescriptions', component:PrescriptionListComponent},
  {path:'staffs', component:StaffsComponent},
  {path:'stafflist',component:StaffListComponent},
  {path:'staff',component:StaffComponent},
  {path:'staff',component:StaffComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'medicine/:MedInvId',component:MedicineComponent},
  {path:'patient',component:PatientComponent},
  {path:'patientlist',component:PatientListComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'appointment/:appId',component:AppointmentComponent},
  {path:'appointments',component:AppointmentsComponent},
  {path:'patient/:PatientId', component: PatientComponent },
  {path:'staff/:StaffId',component:StaffComponent},
  {path:'adminnav',component:AdminNavComponent},
  {path:'medicinelist',component:MedicineListComponent},
  {path:'appointmentlist',component:AppointmentlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }