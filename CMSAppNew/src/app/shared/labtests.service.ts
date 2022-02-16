import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Labtests} from './labtests';

@Injectable({
  providedIn: 'root'
})
export class LabtestsService {

  labtests : Labtests[]; //all details
  formData : Labtests = new Labtests();

  constructor(private httpClient: HttpClient) { }

  ListOfLabtests(){
    this.httpClient.get(environment.apiUrl+"/api/inventory/getalllabtests")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.labtests=response as Labtests[];
      }
    );
  }

  getLabtestById(id:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/inventory/labtest/"+id);
  }

  insertLabtest(lab:Labtests):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/inventory/labtest",lab);
  }

  updateLabtests(lab:Labtests):Observable<any>{
    console.log(lab);
    return this.httpClient.put(environment.apiUrl+"/api/inventory/labtest",lab);
  }

  deleteLabtest(id : number){
    return this.httpClient.delete(environment.apiUrl+"/api/inventory/labtest/"+id);
  }

}
