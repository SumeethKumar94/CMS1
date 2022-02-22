import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { StaffService } from '../shared/staff.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loggedUser : string ;
  loggedId : string;
  constructor(public staffService : StaffService,
    private router: Router,
    public authService : AuthService) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("UserName");
    this.loggedId = localStorage.getItem("ACCESSROLE");
  }

}
