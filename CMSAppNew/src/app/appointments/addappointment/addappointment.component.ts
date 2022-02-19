import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import {AppService} from 'src/app/shared/app.service'
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.scss']
})
export class AddappointmentComponent implements OnInit {

  AppointmentId: number = 0;
  constructor(public appoService: AppService,
    private route: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.AppointmentId = this.route.snapshot.params['AppointmentId'];

    // getpatientById
    if (this.AppointmentId != 0 || this.AppointmentId != null) {
      this.appoService.getAppointmentById(this.AppointmentId).subscribe(
        result => {
          console.log(result);
          var datepipe = new DatePipe("en-UK");
          let formatedDate: any = datepipe.transform(result.StaffDob, 'yyy-MM-dd');
          result.StaffDob = formatedDate;

          //asign this result to empService formData
          this.appoService.formData = Object.assign({}, result);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  //submit form 
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.appoService.formData.AppointmentId;

    //insert or update
    if (addId == 0 || addId == null) {
      //insert 
      this.insertAppointment(form);
    }
    else {
      this.updateAppointment(form);
    }
  }
  insertAppointment(form?: NgForm) {
    console.log("Inserting a record...");
    this.appoService.insertAppointment(form.value).subscribe(
      result => {
        console.log(result);
        //calling reset form for clear the contents
        this.resetForm(form);
        this.toastrService.success("Appointment sucessfully");
      },
      error => {
        console.log(error);
      }
    );
  }
  //Update Method
  updateAppointment(form?: NgForm) {
    console.log("Updating record...");
    this.appoService.updateAppointment(form.value).subscribe(
      result => {
        console.log(result);
        //ca;;ing reset form for clear the contents
        this.resetForm(form);
        this.toastrService.success('Patient Record has been Updated');
      },
      error => {
        console.log(error);
      }
    );
  }
  //clear all contents after submit  
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }
  

}
