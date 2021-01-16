import { Router } from '@angular/router';
import { Customer } from './../../models/customer';
import { RegisterService } from './../../services/register.service';
import { AdminService } from './../../services/admin.service';
import { Author } from './../../models/author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public author = new Author();
  public customer = new Customer();
  message: string;
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registerAuthor(author: Author) {
    this.registerService.registerAuthor(author).subscribe(
      (res) => {
        this.message = 'Author register successfully!';
        setTimeout(() => {
          this.message = '';
          this.router.navigateByUrl('login');
        }, 2500);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  registerCustomer(customer: Customer) {
    this.registerService.registerCustomer(customer).subscribe(
      (res) => {
        this.message = 'Customer register successfully!';
        setTimeout(() => {
          this.message = '';
          this.router.navigateByUrl('login');
        }, 2500);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
