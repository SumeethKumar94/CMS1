import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacybillService } from 'src/app/shared/pharmacybill.service'

@Component({
  selector: 'app-pharmacy-billing',
  templateUrl: './pharmacy-billing.component.html',
  styleUrls: ['./pharmacy-billing.component.scss']
})
export class PharmacyBillingComponent implements OnInit {
  page : number = 1;
  filter : string;

  constructor(public pharmacybillService : PharmacybillService,
    private router : Router) { }

  ngOnInit(): void {
    this.pharmacybillService.bindListPharmacyBill();
  }

  //print Bill
  PrintBill(PrescriptionId : number){
    console.log(PrescriptionId);
    this.router.navigate(['pharmacybillprinting',PrescriptionId])
  }

}
