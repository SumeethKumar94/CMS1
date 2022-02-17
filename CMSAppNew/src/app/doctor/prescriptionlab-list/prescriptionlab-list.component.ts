import { Component, OnInit } from '@angular/core';
import { PrescribeService } from 'src/app/shared/prescribe.service';

@Component({
  selector: 'app-prescriptionlab-list',
  templateUrl: './prescriptionlab-list.component.html',
  styleUrls: ['./prescriptionlab-list.component.scss']
})
export class PrescriptionlabListComponent implements OnInit {

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
