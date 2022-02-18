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
  appointment1: Appointment[];
  formData: Appointment = new Appointment();
  formData2: Appointment = new Appointment();

  constructor(private httpClient: HttpClient) { }

  //all appointments
  getAllAppointments(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/appointments');
  }
   //geting data
   bindListAppointments() {
    this.httpClient.get(environment.apiUrl + '/api/appointments')
      .toPromise().then(
        response => {
          this.appointment = response as Appointment[];
        }
      )
  }

  //get appointment by Id 
  GetAppointmentById(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/doctor/appointments/' + id);
  }
  bindListAppointmentBill(id:number){
    this.httpClient.get(environment.apiUrl+'/api/doctor/appointments/'+id)
    .toPromise().then(
      response=>{
        console.log(response);
        this.appointment=response as Appointment[]
      }
    );}
    // appointment bill
  printappointmentbill(id:number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/doctor/appointments/' +id);
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
  //doctors list
  
  bindListDoctors(){
    this.httpClient.get(environment.apiUrl+'/api/doctor/doctors')
    .toPromise().then(
      response=>{
        console.log(response);
        this.appointment=response as Appointment[]
      }
    );}

    // GetDoctorAppointmentById(id: number): Observable<any> {
    //    return this.httpClient.get(environment.apiUrl + '/api/doctor/appointments/' + id);
  
    // }

    bindListDoctorAppointments(id:number){
      this.httpClient.get(environment.apiUrl+'/api/doctor/appointments/'+id)
      .toPromise().then(
        response=>{
          console.log(response);
          this.appointment1=response as Appointment[]
        }
      );}
}
