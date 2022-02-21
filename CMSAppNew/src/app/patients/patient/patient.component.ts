import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from 'src/app/shared/patient.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  PatientId: number = 0;
  constructor(public patientService: PatientService,
    private route: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    //get patient id
    this.PatientId = this.route.snapshot.params['PatientId'];

    // getpatientById
    if (this.PatientId != 0 || this.PatientId != null) {
      this.patientService.getPatientById(this.PatientId).subscribe(
        result => {
          console.log(result);
          var datepipe = new DatePipe("en-UK");
          let formatedDate: any = datepipe.transform(result.PatientDob, 'yyy-MM-dd');
          result.PatientDob = formatedDate;

          //asign this result to empService formData
          this.patientService.formData = Object.assign({}, result);
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
    let addId = this.patientService.formData.PatientId;

    //insert or update
    if (addId == 0 || addId == null) {
      //insert 
      this.insertPatient(form);
    }
    else {
      this.updatePatient(form);
    }
  }
  insertPatient(form?: NgForm) {
    console.log("Inserting a record...");
    this.patientService.insertPatient(form.value).subscribe(
      result => {
        console.log(result);
        //calling reset form for clear the contents
        this.resetForm(form);
        this.toastrService.success("Patient  record inserted sucessfully");
      },
      error => {
        console.log(error);
      }
    );
  }
  //Update Method
  updatePatient(form?: NgForm) {
    console.log("Updating record...");
    this.patientService.updatePatient(form.value).subscribe(
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
