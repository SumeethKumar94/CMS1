import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-pharmacistnav',
  templateUrl: './pharmacistnav.component.html',
  styleUrls: ['./pharmacistnav.component.scss']
})
export class PharmacistnavComponent implements OnInit {

  constructor(
    public authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
