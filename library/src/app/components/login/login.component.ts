import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/models/Credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginSuccess = false;
  public credentials = new Credentials();
  constructor(
    private adminService: AdminService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService.loginRequest(this.credentials).subscribe(
      (loginResponse) => {
        this.loginSuccess = true;
        this.loginService.token = loginResponse.token;
        this.loginService.type = loginResponse.type;
        this.loginService.isLoggedIn = true;
        this.router.navigateByUrl('books');
      },
      (err) => {
        alert('Invalid email or password or type');
        this.loginService.isLoggedIn = false;
      }
    );
  }
}
