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
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { LabreportComponent } from './labtests/labreport/labreport.component';
import { AppointmentlistComponent } from './appointments/appointmentlist/appointmentlist.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { DoctorappointmentlistComponent } from './appointments/doctorappointmentlist/doctorappointmentlist.component';
import { ReceptionComponent } from './billing/reception/reception.component';
import { PharmacybillprintingComponent } from './pharmacist/pharmacybillprinting/pharmacybillprinting.component';
import { PharmacyBillingComponent } from './billing/pharmacy-billing/pharmacy-billing.component';
import { LabreportformComponent } from './labtechnician/labreportform/labreportform.component';
import { UpdatereportComponent } from './labtechnician/updatereport/updatereport.component';
import { AllappointemntsComponent } from './appointments/allappointemnts/allappointemnts.component';
import { PrescribeComponent } from './doctor/prescribe/prescribe.component';
import { AddappointmentComponent } from './appointments/addappointment/addappointment.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentComponent } from './department/department.component';
import{AuthGuard}from './shared/auth.guard'
import { HomeComponent } from './home/home.component';
import { PrescriptionlabListComponent } from './doctor/prescriptionlab-list/prescriptionlab-list.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'doctor', component:DoctorComponent},
  {path:'admin', component:AdminComponent,canActivate:[AuthGuard],data:{role : '5'}},
  {path:'receptionist',component:ReceptionistComponent},
  {path:'medlist', component:MedicineListComponent,canActivate: [AuthGuard], data: { role: 4 }},
  {path:'labtest', component:LabtestComponent,canActivate: [AuthGuard], data: { role: 3 }},
  {path:'labtest/:LabTestId', component:LabtestComponent,canActivate: [AuthGuard], data: { role: 3 }},
  {path:'receptionist',component:ReceptionistComponent ,canActivate: [AuthGuard], data: { role: 1 }},
  {path:'labtestlist', component:LabtestListComponent,canActivate: [AuthGuard], data: { role: 3 }},
  {path:'prescriptions', component:PrescriptionListComponent},
  {path:'staffs', component:StaffsComponent},
  {path:'stafflist',component:StaffListComponent,canActivate:[AuthGuard],data:{role : '5'}},
  {path:'staff',component:StaffComponent,canActivate:[AuthGuard],data:{role : '5'}},
  {path:'medicine',component:MedicineComponent,canActivate: [AuthGuard], data: { role: 4 }},
  {path:'medicine/:MedInvId',component:MedicineComponent,canActivate: [AuthGuard], data: { role: 4 }},
  {path:'patient',component:PatientComponent},
  {path:'patientlist',component:PatientListComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'appointment/:appId',component:AppointmentComponent},
  {path:'appointments',component:AppointmentsComponent},
  {path:'patient/:PatientId', component: PatientComponent},
  {path:'staff/:StaffId',component:StaffComponent,canActivate:[AuthGuard],data:{role : '5'}},
  {path:'adminnav',component:AdminNavComponent},
  {path:'medicinelist',component:MedicineListComponent,canActivate: [AuthGuard], data: { role: 4 }},
  {path:'labreport',component:LabreportComponent,canActivate: [AuthGuard], data: { role: 3 }},
  {path:'appointmentlist',component:AppointmentlistComponent},
  {path:'pharmacist', component:PharmacistComponent},
  {path:'labtechnician', component:LabtechnicianComponent,canActivate: [AuthGuard], data: { role: 3 }},
  {path:'receptionbilling',component:ReceptionComponent},
  {path:'pharmacybilling',component:PharmacyBillingComponent,canActivate: [AuthGuard], data: { role: 4 }},
  {path:'doctorappointmentlist', component:DoctorappointmentlistComponent,canActivate: [AuthGuard], data: { role: 2 }},
  {path:'doctorappointmentlist/:DoctorId', component:DoctorappointmentlistComponent,canActivate:[AuthGuard],data:{role : 2}},
  {path:'labreportform/:ReportId',component:LabreportformComponent,canActivate: [AuthGuard], data: { role: 3 }},
  {path:'updatereport',component:UpdatereportComponent,canActivate: [AuthGuard], data: { role: 3 }},
  {path:'updatereport/:TestId',component:UpdatereportComponent,canActivate:[AuthGuard],data:{role : 3}},
  {path:'allappointments',component:AllappointemntsComponent},
  {path:'labreportform/:ReportId',component:LabreportformComponent,canActivate:[AuthGuard],data:{role : 3}},
  {path:'updatereport',component:UpdatereportComponent,canActivate:[AuthGuard],data:{role : 3}},
  {path:'updatereport/:TestId',component:UpdatereportComponent,canActivate:[AuthGuard],data:{role : 3}},
  {path:'allappointments/:AppointmentId',component:AppointmentComponent},
  {path:'pharmacybillprinting',component:PharmacybillprintingComponent,canActivate: [AuthGuard], data: { role: 4 }},
  {path:'prescribe',component:PrescribeComponent,canActivate:[AuthGuard],data:{role : 2}},
  {path:'pharmacybillprinting/:PrescriptionId',component:PharmacybillprintingComponent,canActivate: [AuthGuard], data: { role: 4 }},
  {path:'addappointment',component:AddappointmentComponent ,canActivate: [AuthGuard], data: { role: 1 }},
  {path:'prescribe/:AppointmentId',component:PrescribeComponent,canActivate:[AuthGuard],data:{role : 2}},
  {path:'departmentlist',component:DepartmentListComponent,canActivate:[AuthGuard],data:{role : '5'}},
  {path:'department',component:DepartmentComponent,canActivate:[AuthGuard],data:{role : '5'}},
  {path:'department/:RoleId',component:DepartmentComponent,canActivate:[AuthGuard],data:{role : '5'}},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'prescriptionslab', component:PrescriptionlabListComponent,canActivate: [AuthGuard], data: { role: 2 }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }