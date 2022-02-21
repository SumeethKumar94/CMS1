import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tests } from './tests';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  formData: Tests= new Tests();

  constructor(private httpClient:HttpClient) { }

  //get test by testid for report
 getTestById(id : number): Observable<any>{
  console.log(id)
  return this.httpClient.get(environment.apiUrl+'/api/prescribe/'+id);

}
//update
updateTestById(tests:Tests):Observable<any>{
  return this.httpClient.put(environment.apiUrl+'/api/prescribe/result',tests);
}
}
