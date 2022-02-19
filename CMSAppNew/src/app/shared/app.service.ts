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
    return this.httpClient.get(environment.apiUrl + '/api/appointments');
  }

  //geting data
  bindListAppointments() {
    this.httpClient.get(environment.apiUrl + '/api/appointments')
      .toPromise().then(
        response => {
          this.app = response as App[];
        }
      )
  }
  //get patient  by id
  getAppointmentById(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/appointments' + id);
  }
  //insert patient 
  insertAppointment(app:App): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/appointments', app);
  }
  //update patient by id
  updateAppointment(app:App): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/appointments', app);
  }
}