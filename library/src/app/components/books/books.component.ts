import { LoginService } from './../../services/login.service';
import { AuthorService } from './../../services/author.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  message: string;
  public canPurchase = false;
  public authorID: number;
  public email: string;
  public password: string;
  public book = new Book();
  public books: Book[] = [];
  public type: string;
  public isAfford = false;
  constructor(
    private authorService: AuthorService,
    private activateRoute: ActivatedRoute,
    private loginService: LoginService,
    private router: Router
  ) {
    this.authorID = Number(activateRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    this.type = this.loginService.type;
    if (this.type === 'Author') {
      this.isAfford = true;
    }
    if (this.type === 'Customer') {
      this.canPurchase = true;
    }
    this.getAllBooks();
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

  purchaseBook(book: Book) {}

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
    this.authorService.getAllBooks(this.authorID).subscribe(
      (res) => {
        this.books = res;
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
