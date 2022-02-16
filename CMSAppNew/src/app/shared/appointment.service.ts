import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointment : Appointment[];
  formData :Appointment = new Appointment();

  constructor(private httpClient: HttpClient) { }


  //getappointment by Id 
  GetAppointmentById(id : number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/appointments/'+id);

  }

  //update appointment
  updateAppointmentById(appointment:Appointment): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/appointments',appointment);
  }

  //insert employee 
  insertAppointment(appointment:Appointment): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/appointments',appointment);
  }
}
