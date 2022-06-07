import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';

import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiURL='http://127.0.0.1:8000'; // base url for api


  httpOptions = {
    headers : new  HttpHeaders({
      'Content-Type': 'application/json'
    }) 
  }

//constructeur 


  constructor(private httpClient:HttpClient) { }

// ...................


// consume api (get)
    
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/student/')

    .pipe(

        catchError(this.errorHandler)

      )

  }
// ............end get............

// CREATE

  create(student:Student): Observable<any> {

    return this.httpClient.post(this.apiURL + '/student/', JSON.stringify(student), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }


// FIND

  find(id:number): Observable<any>{

  return this.httpClient.get(this.apiURL + '/student/' + id)

    .pipe(

      catchError(this.errorHandler)

      )
    }

  update(id:number, student:Student): Observable<any> {

    return this.httpClient.put(this.apiURL + '/student/' + id, JSON.stringify(student), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }


  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/student/' + id, this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

 
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
}



}
