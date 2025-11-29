import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload } from '../interfaces/login-payload';
import { LoginResponse } from '../interfaces/login-response';
interface loginForm {
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(formLogin:LoginPayload):Observable<LoginResponse>{
    return this.http.post<LoginResponse>('auth/login', formLogin);
  }
}
