import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabtestsComponent } from './labtests/labtests.component';
import { LabtestListComponent } from './labtests/labtest-list/labtest-list.component';
import { LabtestsService } from './shared/labtests.service'
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor/doctor.component';
import { PrescriptionListComponent } from './doctor/prescription-list/prescription-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LabtestsComponent,
    LabtestListComponent,
    DoctorComponent,
    PrescriptionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'prescriptions', component: PrescriptionListComponent }
    ])
  ],
  providers: [LabtestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
