import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pharmacybill } from './pharmacybill';
import { Pharmbillprint } from './pharmbillprint';

@Injectable({
  providedIn: 'root'
})
export class PharmacybillService {
  pharmacyBill : Pharmacybill[];
  formData : Pharmacybill = new Pharmacybill();
  pharmbillprint : Pharmbillprint[];

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

  //getStaff by Id 
  GetBillById(id : number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/prescribe/medbill/'+id);
  }
  bindListPharmacyBillPrint(id : number){
    this.httpClient.get(environment.apiUrl+'/api/prescribe/medbill/'+id)
    .toPromise().then(
      response =>{
        console.log("from Pharmacy Bill Service print Bill");
        console.log(response);
        this.pharmbillprint = response as Pharmbillprint[]
      }
    );
  }
}
