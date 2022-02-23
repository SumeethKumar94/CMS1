import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-receptionistnav',
  templateUrl: './receptionistnav.component.html',
  styleUrls: ['./receptionistnav.component.scss']
})
export class ReceptionistnavComponent implements OnInit {

  constructor(public authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
    
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}
