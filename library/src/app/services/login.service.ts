import { LoginResponse } from './../models/LoginResponse';
import { Credentials } from './../models/Credentials';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public token: string;
  public type: string;
  public email: string;
  public password: string;
  public isLoggedIn = false;
  public constructor(private httpClient: HttpClient) {}

  public loginRequest(credentials: Credentials): Observable<LoginResponse> {
    this.email = credentials.email;
    this.password = credentials.password;
    this.type = credentials.type;
    this.isLoggedIn = true;
    return this.httpClient.post(
      'http://localhost:8080/admin/login/' +
        credentials.email +
        '/' +
        credentials.password,
      null
    );
  }
}
