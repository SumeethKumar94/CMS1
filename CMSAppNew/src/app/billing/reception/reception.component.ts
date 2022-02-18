import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillingService } from 'src/app/shared/billing.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export class ReceptionComponent implements OnInit {
  AppointmentId: number = 0;

  constructor(public billservice: BillingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log("welcome to the loop")
    this.AppointmentId = this.route.snapshot.params['AppointmentId']
    
  }
  bindListAppointments(AppointmentId: number) {
    console.log("Billing of Appointment : " + AppointmentId);
    // navigate to edit form
    this.router.navigate(['reception', AppointmentId])
  }


}