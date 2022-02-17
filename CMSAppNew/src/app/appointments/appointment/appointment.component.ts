import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  //declare variable appid
  appId: number = 0;
  constructor(public appServices: AppointmentService,
    private route: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.appId = this.route.snapshot.params['appId']

    //get appointment  by id for update
    if (this.appId != 0 || this.appId != null) {
      this.appServices.GetAppointmentById(this.appId).subscribe(
        result => {
          console.log(result);
          var dataPipe = new DatePipe("en-Uk");
          let formatedDate: any = dataPipe.transform(result.DateOfJoining, 'yyyy-MM-dd');
          result.DateOfJoining = formatedDate;
          //assign this result to appservices formdata
          this.appServices.formData = Object.assign({}, result);
        },
        error => {
          console.log(error);
        }
      )
    }

  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.appServices.formData.AppointmentId;
    //insert or update
    if (addId == 0 || addId == null) {
      //insert
      this.insertAppointment(form);
    }
    else {
      //update
      this.updateAppointment(form);
    }
  }
  //insert method 
  insertAppointment(form?: NgForm) {
    console.log("Inserting a record...");
    this.appServices.insertAppointment(form.value).subscribe(
      result => {
        console.log(result);
        //call resetform for clean the data
        this.resetForm(form);
        this.toastrService.success("Appointment Added");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //update
  updateAppointment(form?: NgForm) {
    console.log("Updatinging a record...");
    this.appServices.updateAppointmentById(form.value).subscribe(
      result => {
        console.log(result);
        //call resetform for clean the data
        this.resetForm(form);
        this.toastrService.success("Appointment Updated");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //clear all contents
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

}
