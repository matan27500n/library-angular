import { CustomerService } from './../../services/customer.service';
import { AdminService } from './../../services/admin.service';
import { LoginService } from './../../services/login.service';
import { AuthorService } from './../../services/author.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  modalForm: FormGroup;
  searchText: string;
  message: string;
  public canPurchase = false;
  public authorID: number;
  public email: string;
  public password: string;
  public book = new Book();
  public books: Book[] = [];
  public type: string;
  public isAfford = false;
  id: number = 0;
  constructor(
    private authorService: AuthorService,
    private activateRoute: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
    private adminService: AdminService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.type = this.loginService.type;
    if (this.type === 'Author') {
      this.authorService
        .getAuthorID(this.loginService.email, this.loginService.password)
        .subscribe(
          (res) => {
            this.authorID = res;
            this.getAllBooks();
          },
          (err) => {
            alert(err.message);
          }
        );
      this.isAfford = true;
    }
    if (this.type === 'Admin') {
      this.id = 1;
      this.isAfford = false;
      this.getAllBooks();
    }
    if (this.type === 'Customer') {
      this.customerService
        .getCustomerID(this.loginService.email, this.loginService.password)
        .subscribe(
          (res) => {
            this.id = res;
            this.getAllBooks();
          },
          (err) => {
            alert(err.message);
          }
        );
      this.canPurchase = true;
    }
  }

  resetForm() {
    this.modalForm.reset();
    console.log('reset');
  }

  addBook() {
    this.router.navigateByUrl('add-book');
  }

  getOneBook(id: number) {
    this.authorService.getOneBook(id).subscribe(
      (res) => {
        this.book = res;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  purchaseBook(book: Book) {
    this.customerService.setCustomerID(this.id).subscribe(
      (res) => {
        this.customerService.purchaseBook(book).subscribe(
          (res) => {
            this.router.navigateByUrl('purchases');
          },
          (err) => {
            alert(err.message);
          }
        );
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  updateBook(book: Book) {
    this.authorService.updateBook(book).subscribe(
      (res) => {
        this.book = res;
        this.message = book.name + ' update successfully!';
        setTimeout(() => {
          this.message = '';
        }, 2000);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  deleteBook(id: number) {
    this.authorService.deleteBook(id).subscribe(
      (res) => {
        this.books = this.books.filter((book) => book.id !== id);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  getAllBooks() {
    if (this.type === 'Author') {
      this.authorService.getAllBooks(this.authorID).subscribe(
        (res) => {
          this.books = res;
        },
        (err) => {
          alert(err.message);
        }
      );
    }
    if (this.type === 'Admin' || this.type === 'Customer') {
      this.adminService.getAllBooks().subscribe(
        (res) => {
          this.books = res;
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }

}
