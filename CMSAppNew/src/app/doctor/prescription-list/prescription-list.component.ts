import { Component, OnInit } from '@angular/core';
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

  constructor(public prescribeService:PrescribeService) { }

  ngOnInit(): void {

    this.prescribeService.ListOfPrescriptions();

  }

  //Edit Employee
  updatePrescription(prescId : number){
    console.log("Editing : "+prescId);
    // navigate to edit form
  }

}
