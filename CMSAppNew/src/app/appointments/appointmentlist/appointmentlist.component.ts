import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.scss']
})
export class AppointmentlistComponent implements OnInit {

  //declare variable
  page:number=1;
  filter:string;

  constructor(public appointmentService:AppointmentService,private router : Router,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.appointmentService.bindListDoctors();

  }



}
