import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pharmacybill } from './pharmacybill';

@Injectable({
  providedIn: 'root'
})
export class PharmacybillService {
  pharmacyBill : Pharmacybill[];
  formData : Pharmacybill = new Pharmacybill();

  constructor(private httpClient:HttpClient) { }

  bindListPharmacyBill(){
    this.httpClient.get(environment.apiUrl+'/api/prescribe/getmedbill')
    .toPromise().then(
      response =>{
        console.log("From Pharmcay Bill Service");
        console.log(response);
        this.pharmacyBill = response as Pharmacybill[]
      }
    );
  }

  //Medicine List 
  bindListMedicine(){
    this.httpClient.get(environment.apiUrl+'')
  }
}
