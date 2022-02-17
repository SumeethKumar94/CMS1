import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor(public appServices: AppointmentService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.appServices.formData.AppointmentId;

    //insert or update

    if (addId == 0 || addId == null) {
      //insert
      this.insertAppointment(form)

    }
    else {
      //update
    }
  }

  //insert method 
  insertAppointment(form?: NgForm) {
    console.log("Inserting a record...");
    this.appServices.insertAppointment(form.value).subscribe(
      result => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

