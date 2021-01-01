import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenManagerService } from './token-manager.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(
    private httpClient: HttpClient,
    private tokenManager: TokenManagerService
  ) {}

  public resetToken() {
    const headers = new HttpHeaders({
      'Coupon-System-Header': this.tokenManager.getToken(),
    });
    const options = { headers: headers };
    return options;
  }

  public logout(): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:8080/admin/logout');
  }

  public loginRequest(email: string, password: string) {
    return this.httpClient.get(
      'http://localhost:8080/admin/login/' + email + '/' + password
    );
  }
}
