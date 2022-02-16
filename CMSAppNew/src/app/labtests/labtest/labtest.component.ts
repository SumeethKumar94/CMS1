import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LabtestsService } from 'src/app/shared/labtests.service';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrls: ['./labtest.component.scss']
})
export class LabtestComponent implements OnInit {

  LabTestId:number=0;
  constructor(
    public labService:LabtestsService,
    private route: ActivatedRoute,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
   
  //get LabTestId from Activate route
  this.LabTestId = this.route.snapshot.params['LabTestId'];
  if (this.LabTestId != 0 || this.LabTestId != null) {
    this.labService.getLabtestById(this.LabTestId).subscribe(
      result => {
        console.log("Retrieving get By Id");
        console.log(result);

        // //format the date : yyyy-MM-DD
        // var datePipe = new DatePipe("en-UK");
        // let formatedDate: any = datePipe.transform(result.Doj, 'yyyy-MM-dd')
        // result.Doj = formatedDate;

        this.labService.formData = Object.assign({}, result);

      },
      error => {
        console.log(error);
      }
    );
  }
}//end ngOnInIt

onSubmit(form: NgForm) {
  console.log(form.value);

  //insert/UPDATE
  let addId = this.labService.formData.LabTestId;
  if (addId == 0 || addId == null) {//INSERT
    console.log("Inserting 001");
    this.insertLabRecord(form);
  }
  else {
    this.updateLabRecord(form);
  }
}//end OnSubmit

//insert MEthod
insertLabRecord(form?: NgForm) {
  console.log("Inserting a rercord");
  this.labService.insertLabtest(form.value).subscribe(
    (result) => {
      console.log(result);
      this.toastrService.success('Labtest Record has been Inserted','CMS');
    },
    (error) => {
      console.log(error);
    }
  );
}//End Insert Method

//Update
updateLabRecord(form?: NgForm) {
  console.log("Updating a record");
  this.labService.updateLabtests(form.value).subscribe(
    (result) => {
      console.log(result);
      console.log("Updated a record");
      this.toastrService.success('Labtest Record has been Updated','CMS');
      this.resetForm(form);
    },
    (error) => {
      console.log(error);
    }
  );
}//end Update 

//clear all contents after submit -- Intialization
resetForm(form?: NgForm) {
  if (form != null) {
    form.resetForm();
  }
}//end ResetForm

}
