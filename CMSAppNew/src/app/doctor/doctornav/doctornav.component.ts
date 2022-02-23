import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-doctornav',
  templateUrl: './doctornav.component.html',
  styleUrls: ['./doctornav.component.scss']
})
export class DoctornavComponent implements OnInit {

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
