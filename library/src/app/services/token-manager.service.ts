import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenManagerService {
  constructor(private loginService: LoginService) {}

  public getToken(): string {
    return this.loginService.token;
  }
}
