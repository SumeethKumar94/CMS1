import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prescribe } from 'src/app/shared/prescribe';
import { PrescribeService } from 'src/app/shared/prescribe.service';

@Component({
  selector: 'app-prescribe',
  templateUrl: './prescribe.component.html',
  styleUrls: ['./prescribe.component.scss']
})
export class PrescribeComponent implements OnInit {

  AppointmentId:number =0;
  MedIdZero:number=0;
  constructor(
    private router : Router,
    public prescService:PrescribeService,
    private route: ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.prescService.getAllMedicine();
    this.prescService.getAllLabTests();
    this.AppointmentId = this.route.snapshot.params['AppointmentId'];
    console.log("AppointmentId : "+this.AppointmentId);
    this.prescService.getAppById(this.AppointmentId).subscribe(
        result => {
          console.log("Retrieving get By Id");
          console.log(result);
          this.prescService.formData2 = Object.assign({}, result[0]);
        },
        error => {
          console.log(error);
        }
      ); 
    
    
  }
  

  addMed(form: NgForm){
    console.log(form.value);
    console.log("Prescribing Medicines");
    this.prescService.insertMedReport(form.value,this.AppointmentId).subscribe(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );
  }

  addLab(form: NgForm){
    console.log(form.value);
    console.log("Prescribing Lab Test");
    this.prescService.insertLabReport(form.value,this.AppointmentId).subscribe(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );
  }

  addDN(form: NgForm) {
    console.log(form.value);
    console.log("Inserting Doctor Notes");
    this.prescService.insertDoctorNotes(form.value).subscribe(
    (result) => {
      console.log(result);
      this.resetForm(form);
    },
    (error) => {
      console.log(error);
    }
  );
    // this.router.navigate(['appointmentlist']);
  }

  //clear all contents after submit -- Intialization
resetForm(form?: NgForm) {
  if (form != null) {
    form.resetForm();
  }
}//end ResetForm

}



