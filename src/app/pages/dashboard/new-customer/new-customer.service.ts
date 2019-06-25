import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewCustomerService {

  constructor(private httpClient : HttpClient) { }

  public registration(registrationModel): Observable<any> {
    return this.httpClient.post("http://ec2-13-126-155-65.ap-south-1.compute.amazonaws.com:8080/alchemy/users/sign-up",registrationModel);
  }
}
