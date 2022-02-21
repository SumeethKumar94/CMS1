import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staff } from './staff';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Department } from './department'

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  staffs : Staff[];
  department : Department[];
  formData : Staff = new Staff();
  dformData : Department = new Department();

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

  //get departments
  bindListDepartment(){
    this.httpClient.get(environment.apiUrl+'/api/roles')
    .toPromise().then(
      response =>{
        console.log("from Services");
        console.log(response);
        this.department = response as Department[];
      }
    )
  }

  deletePost(id : number){
    return this.httpClient.delete(environment.apiUrl+'/api/staff/'+id);
  }

  //getStaff by Id 
  GetStaffById(id : number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/staff/'+id);

  }

  //update staff 
  updateStaffById(staff : Staff): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/staff',staff);
  }

  //insert employee 
  insertStaff(staff :Staff): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/staff/addstaff',staff);
  }

  //update Roles
  updateRole(department : Department): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/roles/updatedepartment',department)
  }

  //add ROles
  insertRole(department:Department): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/roles/updatedepartment',department)
  }

  //get role by Id 
  getRolebyId(id : number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/roles/'+id)
  }
}
  


