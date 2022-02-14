import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffsComponent } from './staffs/staffs.component';
import { PrescriptionListComponent } from './doctor/prescription-list/prescription-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
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
