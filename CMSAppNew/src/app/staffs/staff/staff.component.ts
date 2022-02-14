import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    // get roles

    //get staffId
    this.staffId = this.route.params['staffId'];

  //  // getStaffById
  //   if(this.staffId!=0 || this.staffId != null){
  //     this.staffService.
  //   }

  }

}
