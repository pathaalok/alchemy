import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TokenTransactionsService {

  constructor(private httpClient : HttpClient) { }

 
public getTokenTransactions(): Observable<any> {
    return this.httpClient.get("");
  }



}
