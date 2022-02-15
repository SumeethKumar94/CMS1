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
import { LabtestComponent } from './labtests/labtest/labtest.component';



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
  {path:'staff',component:StaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }