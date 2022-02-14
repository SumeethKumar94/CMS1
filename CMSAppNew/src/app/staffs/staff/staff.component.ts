import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  //declare variable 
  staffId : number;

  constructor(public staffService : StaffService,
    private route : ActivatedRoute ,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    // get roles
    this.staffService.bindListDepartment();

    //get staffId
    this.staffId = this.route.params['staffId'];

   // getStaffById
    if(this.staffId!=0 || this.staffId != null){
      this.staffService.GetStaffById(this.staffId).subscribe(
        result =>{
          console.log(result);
          //formate the date : yyy-MM-dd
          var datepipe = new DatePipe("en-UK");
          let formatedDate : any = datepipe.transform(result.StaffDob,'yyy-MM-dd');
          result.StaffDob = formatedDate;

          //asign this result to empService formData
          this.staffService.formData = Object.assign({},result);
        },
        error =>{
          console.log(error);
        }
      );
    }
  }
  //submit form 
  onSubmit(form : NgForm){
    console.log(form.value);
    let addId = this.staffService.formData.StaffId;

    //insert or update
    if(addId == 0 || addId == null){
      //insert 
      this.insertStaffRecord(form);
    }
    else{
      this.updateStaffRecord(form);
    }
  }
  insertStaffRecord(form?:NgForm){
    console.log("Inserting a record...");
    this.staffService.insertStaff(form.value).subscribe(
      result =>{
        console.log(result);
        //calling reset form for clear the contents
        this.resetForm(form);
        this.toastr.success('Staff Record has been inserted','CMS v2022');
      },
      error =>{
        console.log(error);
      }
    );
  }

  //Update Method
  updateStaffRecord(form?:NgForm){
    console.log("Updating record...");
    this.staffService.updateStaffById(form.value).subscribe(
      result =>{
        console.log(result);
        //ca;;ing reset form for clear the contents
        this.resetForm(form);
        this.toastr.success('Staff Record has been inserted','CMS v2022')
      },
      error =>{
        console.log(error);
      }
    );
  }

  //clear all contents after submit  
  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
  }
}
