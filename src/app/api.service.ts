import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(url:string):Observable<any>{
    return this.http.get(url).pipe(
      catchError(err => {return 'Error'})
    )
  }

  post(url:string, body:string):Observable<any> {
    var formatBody = {
      "title": `${body}`
    }
    return this.http.post(url, formatBody).pipe(
      catchError(err => {return 'Error'})
    )
  }
}
