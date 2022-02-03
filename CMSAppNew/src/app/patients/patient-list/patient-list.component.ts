import { Component, OnInit } from '@angular/core';
import{PatientService} from '../../shared/patient.service'

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

 page:number=1;
 filter:string;

constructor(public patientService:PatientService) { }

  ngOnInit(): void {
    console.log("welcome to the loop")
    //this.getpatient();
    this.patientService.bindListPatients();
  }
  //get all patient
  getpatients(){
    this.patientService.getAllPatient().subscribe(
      response=>{
        console.log("correct")
        console.log(response)
      },
      error=>{
        console.log("something is wrong")
        console.log(error);
      }
    )
  }

}
