import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Medicine} from './medicine';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {
        medicines:Medicine[];
        formData:Medicine=new Medicine();
  
constructor(private httpClient:HttpClient) { }

//get all medicine
getAllMedicines():Observable<any>{
  //https://localhost:44329/api/medinventory/get---environment
  return this.httpClient.get(environment.apiUrl+'/api/medinventory/get');
}
  
//2.
bindListMedicines(){
  this.httpClient.get(environment.apiUrl+'/api/medinventory/get')
  .toPromise().then(
    response=>{
      console.log(response);
      this.medicines=response as Medicine[]
    }
  );}

  getMedicinefById(id : number): Observable<any>{
    console.log(id)
    return this.httpClient.get(environment.apiUrl+'/api/medinventory/medicine/'+id);

  }

  


  //insert
  insertMedicine(medicine:Medicine):Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/medinventory/medicine',medicine);
  }
  
  //update
  updateMedicine(medicine:Medicine):Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/medinventory/medicine',medicine);
  }

  //delete
  deleteMedicine(id : number){
    return this.httpClient.delete(environment.apiUrl+'/api/medinventory/medicine/'+id);
  
}}
