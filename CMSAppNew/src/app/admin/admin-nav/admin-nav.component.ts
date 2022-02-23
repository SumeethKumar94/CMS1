import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  constructor(public authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  //logout
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}
