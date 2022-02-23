import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-labtechnav',
  templateUrl: './labtechnav.component.html',
  styleUrls: ['./labtechnav.component.scss']
})
export class LabtechnavComponent implements OnInit {

  constructor(public authService: AuthService,
    private router:Router) { }

  ngOnInit(): void {
    //logout
  
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}
