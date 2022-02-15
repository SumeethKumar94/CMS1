import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Staff } from './staff';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  httpClient : HttpClient) { }


  public loginVerify(user : Staff){
    //calling web service and passing username and password


    return this.httpClient.get(environment.apiUrl+"/api/staff/"+user.StaffName+"&"+user.StaffPassword);
  }

  //logout
  public logout(){
    localStorage.removeItem("UserName");
    localStorage.removeItem("ACESSROLE");
    sessionStorage.removeItem("USERNAME");
}
}