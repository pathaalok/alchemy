import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ManageCustomersService {

  constructor(private httpClient : HttpClient) { }

  
  public getCustomers(): Observable<any> {
    return this.httpClient.get("http://ec2-13-233-1-50.ap-south-1.compute.amazonaws.com:8080/alchemy/gpplatformrequests");
  }


 public updateStatusCustomer(request): Observable<any> {
    return this.httpClient.put("http://ec2-13-233-1-50.ap-south-1.compute.amazonaws.com:8080/alchemy/gpplatformrequests",request);
  }
  


}

