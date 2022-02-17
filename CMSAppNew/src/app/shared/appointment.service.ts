import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointment: Appointment[];
  formData: Appointment = new Appointment();

  constructor(private httpClient: HttpClient) { }


  //get appointment by Id 
  GetAppointmentById(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/appointments/' + id);

  }

  //update appointment
  updateAppointmentById(appointment: Appointment): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/appointments', appointment);
  }

  //insert appintment 
  insertAppointment(appointment: Appointment): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/appointments', appointment);
  }

  //get doctor and id
  GetByDoctor(appointment: Appointment): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/appointments', appointment);
  }

  // GetDoctorList():Observable<any>{
  //       return this.httpClient.get(environment.apiUrl+'/api/doctor/doctors');
  // }

  bindListDoctors(){
    this.httpClient.get(environment.apiUrl+'/api/doctor/doctors')
    .toPromise().then(
      response=>{
        console.log(response);
        this.appointment=response as Appointment[]
      }
    );}
}
