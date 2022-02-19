import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allappointemnts',
  templateUrl: './allappointemnts.component.html',
  styleUrls: ['./allappointemnts.component.scss']
})
export class AllappointemntsComponent implements OnInit {

  constructor(public appservice: AppointmentService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("welcome to the loop")
    this.appservice.bindListAppointments();
  }
  //get all appointments
  getappointments() {
    this.appservice.getAllAppointments().subscribe(
      response => {
        console.log("correct")
        console.log(response)
      },
      error => {
        console.log("something is wrong")
        console.log(error);
      }
    )
  }
  printBill(AppointmentId: number) {
    console.log(AppointmentId);
    this.router.navigate(['appointment', AppointmentId])
  }
  addAppointment() {
    this.router.navigate(['addappointment']);
  }
}
