import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from './appointment';
import { Labtests } from './labtests';
import { Medicine } from './medicine';
import {Prescribe} from './prescribe';

@Injectable({
  providedIn: 'root'
})

export class PrescribeService {

  prescribe : Prescribe[]; //all details
  formData : Prescribe = new Prescribe();
  formData1 : Prescribe = new Prescribe();
  appoinment : Appointment[];
  formData2 : Appointment = new Appointment();
  medicines : Medicine[];
  formData3 : Medicine = new Medicine();
  labtests : Labtests[];
  formData4 : Labtests =new Labtests();

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

  getAppById(id:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/doctor/appointment/"+id);
  }

  insertPrescMed(med:Prescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/prescribe/medpresc",med);
  }

  genrateLabReport(lab:Prescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/prescribe/labsreport",lab);
  }

  genrateMedReport(med:Prescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/prescribe/medspresc",med);
  }

  insertPrescLab(lab:Prescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/prescribe/labpresc",lab);
  }

  //get All Medicines 
  getAllMedicine(){
    this.httpClient.get(environment.apiUrl+"/api/medinventory/get")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.medicines=response as Medicine[];
        
        console.log(this.medicines);
      }
    );
  }

  //get All Medicines 
  getAllLabTests(){
    this.httpClient.get(environment.apiUrl+"/api/inventory/getalllabtests")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.labtests=response as Labtests[];
        
        console.log(this.labtests);
      }
    );
  }


}
