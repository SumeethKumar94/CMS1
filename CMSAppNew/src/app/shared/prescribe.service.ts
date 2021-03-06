import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from './appointment';
import { Labtests } from './labtests';
import { Medicine } from './medicine';
import { Medicines } from './medicines';
import {Prescribe} from './prescribe';
import { DoctorNotes } from './doctor-notes';
import { Tests } from './tests';

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
  medicine : Medicines[];
  formData5 :Medicines = new Medicines();
  notes : DoctorNotes[];
  formData6:DoctorNotes=new DoctorNotes();
  tests : Tests[];
  formData7:Tests=new Tests();
 
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

  // insertPrescMed(med:Prescribe):Observable<any>{
  //   return this.httpClient.post(environment.apiUrl+"/api/prescribe/medpresc",med);
  // }

  // genrateLabReport(lab:Prescribe):Observable<any>{
  //   return this.httpClient.post(environment.apiUrl+"/api/prescribe/labsreport",lab);
  // }

  insertMedReport(med:Medicines,id:number):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/prescribe/medpresc/"+id,med);
  }

  insertLabReport(lab:Tests,id:number):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/prescribe/labpresc/"+id,lab);
  }

  insertDoctorNotes(doc:DoctorNotes):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/prescribe/notes",doc);
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
