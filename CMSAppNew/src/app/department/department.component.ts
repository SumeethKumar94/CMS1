import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from '../shared/staff.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  RoleId : number;

  constructor(public staffService : StaffService,
    private route : ActivatedRoute,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.RoleId = this.route.snapshot.params['RoleId'];
    
    if(this.RoleId !- 0 || this.RoleId != null){
      //get role
      this.staffService.getRolebyId(this.RoleId).subscribe(
        result =>{
          console.log(result);

          this.staffService.dformData = Object.assign({},result);
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
    let addId = this.staffService.dformData.RoleId;

    //insert or update

    if(addId == 0 || addId == null){
      this.insertRole(form);
    }
    else{
      this.updateRole(form);
    }
  }

  //insert method
  insertRole(form?:NgForm){
    console.log("Inserting Roles");
    this.staffService.insertRole(form.value).subscribe(
      result =>{
        console.log(result);
        this.resetForm(form);
        this.toastr.success('New Role Added')
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  //update Method
  updateRole(form?:NgForm){
    console.log("Updating Roles");
    this.staffService.updateRole(form.value).subscribe(
      result =>{
        console.log(result);

        this.resetForm(form);
        this.toastr.success('Role updated')
      },
      (error) =>{
        console.log(error);
      }
    )
  }
  //clear all contents after submit
  resetForm(form?:NgForm){
    if(form != null){
      form.resetForm();
    }
  }

}
