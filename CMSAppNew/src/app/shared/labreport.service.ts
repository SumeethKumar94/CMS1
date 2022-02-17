import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Labreport } from 'src/app/shared/labreport';

@Injectable({
  providedIn: 'root'
})
export class LabreportService {
 Labreport() {
   throw new Error('Method not implemented.');
 }

 //retrive all data from 
 reports: Labreport[];
 formData: Labreport = new Labreport();

 constructor(private httpClient: HttpClient) { }

 getLabReport(): Observable<any> {
   return this.httpClient.get(environment.apiUrl + '/api/prescribe/labreport');
 }
//geting data
 bindListLabReport() {
   this.httpClient.get(environment.apiUrl + '/api/prescribe/labreport')
     .toPromise().then(
       response => {
         this.reports = response as Labreport[];
         console.log(this.reports);
       }
     )
 }
 
}
