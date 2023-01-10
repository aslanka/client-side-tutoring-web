import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Employee} from '../models/employee';
import { Observable } from 'rxjs/Observable';

const baseUrl = '/api/v1/Tutor';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http : HttpClient) {
   
   }

   public findAll() : Observable<any> {
      return this.http.get(baseUrl);
   }
}
