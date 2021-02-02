import { LoginService } from './../../services/login.service';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent implements OnInit {
  searchText: string;
  id: number;
  idBook: number;
  public books: Book[] = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private customerService: CustomerService,
    private loginService: LoginService
  ) {
    //this.id = Number(activateRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    this.customerService
      .getCustomerID(this.loginService.email, this.loginService.password)
      .subscribe(
        (res) => {
          this.id = res;
          this.setCustomerID();
          this.getCustomerBooks();
        },
        (err) => {
          alert(err.message);
        }
      );
  }

  setCustomerID() {
    this.customerService.setCustomerID(this.id).subscribe(
      (res) => {
        console.log('customer id: ' + this.id);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  getCustomerBooks() {
    this.customerService.getCustomerBooks().subscribe(
      (res) => {
        this.books = res;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  cancelPurchase(id: number) {
    this.customerService.cancelPurchase(id).subscribe(
      (res) => {
        this.books = this.books.filter((book) => book.id !== id);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
