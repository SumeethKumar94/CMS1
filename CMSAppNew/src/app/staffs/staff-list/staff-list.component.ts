import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/shared/staff.service';


@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  page: number = 1;
  filter: string;

  constructor(public staffService : StaffService) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
  //this.getEmployees();

  this.staffService.bindListPosts();
  }

  //Update Employee 
  updateEmployee(empId :number){
    console.log(empId);
    // navigate to edit form with selected employee details
    }


  //Delete Emplyee
  deletePost(empId :number){
    if(confirm('Are you sure, you want to DELETE this record')){
      this.staffService.deletePost(empId).subscribe(
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
