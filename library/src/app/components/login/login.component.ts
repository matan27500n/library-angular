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
  constructor(
    private adminService: AdminService,
    private router: Router,
    private loginService: LoginService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {}

  login() {
    this.loginService.loginRequest(this.credentials).subscribe(
      (loginResponse) => {
        this.loginSuccess = true;
        this.loginService.token = loginResponse.token;
        this.loginService.type = loginResponse.type;
        this.loginService.isLoggedIn = true;
        this.authorService
          .getAuthorID(this.credentials.email, this.credentials.password)
          .subscribe(
            (res) => {
              this.id = res;
              this.router.navigate(['books', this.id]);
            },
            (err) => {
              alert(err.message);
              this.loginService.isLoggedIn = false;
            }
          );
      },
      (err) => {
        alert('Invalid email or password or type');
        this.loginService.isLoggedIn = false;
      }
    );
  }
}
