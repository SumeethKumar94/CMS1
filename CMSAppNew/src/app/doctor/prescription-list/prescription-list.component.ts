import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PrescribeService}from '../../shared/prescribe.service'

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss']
})

export class PrescriptionListComponent implements OnInit {

  //declare varaible
  page:number=1;
  filter:string;

  constructor(public prescribeService:PrescribeService,
    private router :Router) { }

  ngOnInit(): void {

    this.prescribeService.ListOfPrescriptions();

  }

  PrintBill(){
    this.router.navigateByUrl('pharmacybilling')
  }

}
