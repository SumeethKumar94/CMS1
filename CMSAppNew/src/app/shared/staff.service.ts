import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from './staff';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  staffs : Staff[];
  formData : Staff = new Staff();

  constructor(private httpClient: HttpClient) { }

  // getAllPosts():Observable<any>{
  //   return this.httpClient.get(environment.apiUrl+'/api/post');
  // }


  bindListPosts(){
    this.httpClient.get(environment.apiUrl+'/api/staff/GetStaffsAll')
    .toPromise().then(
      response =>{
        console.log("From Services");
        console.log(response);
        this.staffs = response as Staff[]
      }
    );
  }

  deletePost(id : number){
    return this.httpClient.delete(environment.apiUrl+'/api/staff/'+id);
  }

  // //getStaff by Id 
  // GetStaffById(id : number){
  //   return this.httpClient.get(environment.apiUrl+'/api/staff/search/'+)
  }
  


