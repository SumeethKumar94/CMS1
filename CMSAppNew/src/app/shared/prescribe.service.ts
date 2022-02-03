import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Prescribe} from './prescribe';

@Injectable({
  providedIn: 'root'
})

export class PrescribeService {

  prescribe : Prescribe[]; //all details
  formData : Prescribe = new Prescribe();

  constructor(private httpClient: HttpClient) { }

  ListOfPrescriptions(){
    this.httpClient.get(environment.apiUrl+"/api/prescribe/getprescriptions")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.prescribe=response as Prescribe[];
      }
    );
  }

}
