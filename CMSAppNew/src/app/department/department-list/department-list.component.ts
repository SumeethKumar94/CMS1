import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  page:number = 1;
  filter : string;

  constructor(public staffService : StaffService,
    private router : Router,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    console.log("Department life cycle");

    this.staffService.bindListDepartment();
  }

  //update department
  UpdateDepartment(RoleId : number){
    console.log(RoleId);
    this.router.navigate(['department',RoleId])
  }

}
