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
  reportId:number=0;
  prescId:number=0;
  constructor(
    private router : Router,
    public prescService:PrescribeService,
    private route: ActivatedRoute,
    private toastrService:ToastrService) { }

  date:Prescribe=new Prescribe();

  ngOnInit(): void {
    this.prescService.getAllMedicine();
    this.prescService.getAllLabTests();
    this.AppointmentId = this.route.snapshot.params['appId'];
    if (this.AppointmentId != 0 || this.AppointmentId != null) {
      this.prescService.getAppById(this.AppointmentId).subscribe(
        result => {
          console.log("Retrieving get By Id");
          console.log(result);
          this.prescService.formData2 = Object.assign({}, result);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  addMed(){

  }

  addLab(){

  }

  addDN(){
    
    this.router.navigate(['doctorappointmentlist']);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  
    
    // this.insertLabRecord(form);
    
  }//end OnSubmit

}



