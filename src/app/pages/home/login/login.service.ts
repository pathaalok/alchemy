import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  public login(loginModel): Observable<any> {
    return this.httpClient.post("http://ec2-13-233-1-50.ap-south-1.compute.amazonaws.com:8080/alchemy/login",loginModel);
  }


  public getUserDetails(userName): Observable<any> {
    return this.httpClient.get("http://ec2-13-233-1-50.ap-south-1.compute.amazonaws.com:8080/alchemy/users/user?userName="+userName);
  }


}
