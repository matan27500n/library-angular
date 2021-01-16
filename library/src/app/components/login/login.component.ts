import { LoginResponse } from './../../models/LoginResponse';
import { CustomerService } from './../../services/customer.service';
import { AuthorService } from './../../services/author.service';
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
  public id: number;
  public loginSuccess = false;
  public credentials = new Credentials();
  message: string;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private loginService: LoginService,
    private authorService: AuthorService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService.loginRequest(this.credentials).subscribe(
      (loginResponse) => {
        this.loginSuccess = true;
        this.loginService.token = loginResponse.token;
        this.loginService.type = loginResponse.type;
        this.loginService.isLoggedIn = true;
        this.message = 'You login successfully! Have a nice day';
        setTimeout(() => {
          this.message = '';
          this.router.navigateByUrl('books');
        }, 2500);
      },
      (err) => {
        this.loginService.isLoggedIn = false;
        alert(err.message);
      }
    );
  }
}
