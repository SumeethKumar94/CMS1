import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from 'src/app/shared/staff.service';


@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  page: number = 1;
  filter: string;

  
  constructor(public staffService : StaffService,
    private router : Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
  //this.getEmployees();

  this.staffService.bindListPosts();
  }

  //Update Employee 
  updateEmployee(staffId :number){
    console.log(staffId);
    this.router.navigate(['staff',staffId])
    }


  //Delete Emplyee
  deletePost(staffId :number){
    if(confirm('Are you sure, you want to DELETE this record')){
      this.staffService.deletePost(staffId).subscribe(
        response =>{
          this.staffService.bindListPosts();
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

}
