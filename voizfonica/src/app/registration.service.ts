import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { plans } from './plans';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }
  
  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8081/login", user);
  }

  public adminlogin(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8081/adminlogin", user);
  }

  public addprepaidplan(plans: plans): Observable<Object> {
    return this._http.post<any>("http://localhost:8081/addprepaidplan", plans);
  }


  getPrepaidplan(): Observable<plans[]> {
    return this._http.get<plans[]>("http://localhost:8081/plans");
  }

}
