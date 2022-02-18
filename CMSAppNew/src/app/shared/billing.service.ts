import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from 'src/app/shared/billing';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BillingService {

  billing:Billing[];
  formData:Billing = new Billing();

  constructor(private httpClient: HttpClient) { }

  //geting data
  bindListAppointments() {
    this.httpClient.get(environment.apiUrl + '/api/appointments')
      .toPromise().then(
        response => {
          this.billing = response as Billing[];
        }
      )
  }
  getAppointmentById(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/appointments/' + id);
  }
  bindListAppointmentBill(id:number){
    this.httpClient.get(environment.apiUrl+'/api/appointments/'+id)
    .toPromise().then(
      response=>{
        console.log(response);
        this.billing=response as Billing[]
      }
    );}
}