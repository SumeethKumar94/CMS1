import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { App } from './app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  //retrive all data from 
  app: App[];
  formData: App = new App();

  constructor(private httpClient: HttpClient) { }

  getAllAppointments(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/appointments/get');
  }

  //geting data
  bindListAppointments() {
    this.httpClient.get(environment.apiUrl + '/api/appointments/get')
      .toPromise().then(
        response => {
          this.app = response as App[];
        }  
      )
      console.log(this.app)
  }
  //get appointment  by id
  getAppointmentById(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/appointments' + id);
  }
  //insert appointment
  insertAppointment(app:App): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/appointments', app);
  }
  //update appointment by id
  updateAppointment(app:App): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/appointments', app);
  }
}