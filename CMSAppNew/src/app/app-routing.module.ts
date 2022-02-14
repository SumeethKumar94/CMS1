import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrescriptionListComponent } from './doctor/prescription-list/prescription-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'prescriptions', component:PrescriptionListComponent},
  {path:'', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
