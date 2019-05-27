import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient : HttpClient) { }

  public registration(registrationModel): Observable<any> {
    return this.httpClient.post("../../assets/test-data/preview.html",registrationModel).pipe(
      map((res: any) => {
        console.log('lksad')
        res.json()
      }),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }
}
