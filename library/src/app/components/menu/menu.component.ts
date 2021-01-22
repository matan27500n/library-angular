import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public typeOfSystem: string;
  messageAdmin: string;
  messageAuthor: string;
  messageCustomer: string;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {}

  checkType() {
    if (this.loginService.type === 'Admin') {
      this.messageAdmin = 'have a permission';
    } else if (this.loginService.type === 'Author') {
      this.messageAuthor = 'have a permission';
    } else {
      this.messageCustomer = 'have a permission';
    }
  }

  public resetDate(): void {
    this.loginService.email = '';
    this.loginService.password = '';
    this.loginService.type = '';
    this.loginService.token = '';
    this.loginService.isLoggedIn = false;
    this.router.navigateByUrl('/logout');
  }

  public showLogOutDialog(): void {
    if (confirm('Are you sure you want to log out?') === true) {
      this.adminService.logout().subscribe(
        (res) => {
          this.messageAdmin = '';
          this.messageAuthor = '';
          this.messageCustomer = '';
        },
        (err) => {
          alert(err.message);
        }
      );
      this.resetDate();
    } else {
      this.router.navigateByUrl('books');
    }
  }

  public isLoggedIn(): boolean {
    return this.loginService.isLoggedIn;
  }
}
