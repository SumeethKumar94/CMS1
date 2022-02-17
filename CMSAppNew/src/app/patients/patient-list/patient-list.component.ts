import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../shared/patient.service'

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  page: number = 1;
  filter: string;

  constructor(public patientService: PatientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log("welcome to the loop")
    //this.getpatient();
    this.patientService.bindListPatients();
  }
  addPatient() {
    this.router.navigate(['patient']);
  }
  //get all patient
  getpatients() {
    this.patientService.getAllPatient().subscribe(
      response => {
        console.log("correct")
        console.log(response)
      },
      error => {
        console.log("something is wrong")
        console.log(error);
      }
    )
  }
  //update
  updatePatient(PatientId: number) {
    console.log(PatientId);
    this.router.navigate(['patient', PatientId])
  }


}
