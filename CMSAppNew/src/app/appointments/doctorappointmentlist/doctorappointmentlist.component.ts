import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-doctorappointmentlist',
  templateUrl: './doctorappointmentlist.component.html',
  styleUrls: ['./doctorappointmentlist.component.scss']
})
export class DoctorappointmentlistComponent implements OnInit {
  //declare variable
  page:number=1;
  filter:string;
  DoctorId:number=0;
  role:number=0;

  constructor(public appointmentService:AppointmentService,
    private route :ActivatedRoute,
    private router:Router) { }
    
  ngOnInit(): void {
    this.role = parseInt(localStorage.getItem('StaffId'));
    this.DoctorId = this.route.snapshot.params['DoctorId']
    //get appointment  by id for update
    this.appointmentService.bindListDoctorAppointments(this.role)
  }

  prescribe(AppointmentId : number){
    console.log("Editing : "+AppointmentId);
    // navigate to edit form
    this.router.navigate(['prescribe',AppointmentId])
  }
  
  bindListDoctorAppointments(DoctorId:number){
    console.log("listing the appointments of doctorId : "+DoctorId);
    // navigate to edit form
    this.router.navigate(['doctorappointmentlist',DoctorId])
  }

 
}
