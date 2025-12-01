import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interface/users';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }

  getUsers() {
    return this._http.get<Users[]>('users').pipe(

      catchError((error: HttpErrorResponse) => {
        
        return this.handleUsersError(error);
      })
    );
  }

  private handleUsersError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unexpected error occurred';
    
    if (error.status === 0) {
      errorMessage = 'Unable to connect to the server. Check your internet connection. ' + error.status + ' ' +error.message;
    } else if (error.status === 404) {
      errorMessage = ' No users found. ' + error.status + ' ' +error.message;
    } else if (error.status >= 500) {
      errorMessage = 'Server error. Please try again later.' + error.status + ' ' +error.message;
    }
    
    console.error('Users Service Error:', errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }

}
