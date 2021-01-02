import { LoginService } from './../../services/login.service';
import { AuthorService } from './../../services/author.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  book = new Book();
  type: string;
  isAfford = false;
  constructor(
    private authorService: AuthorService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.type = this.loginService.type;
    if (this.type === 'Admin') {
      this.isAfford = true;
      console.log('is afford? ' + this.isAfford);
    }
    this.createBook();
  }

  createBook() {
    this.authorService.getOneBook(1).subscribe(
      (res) => {
        this.book = res;
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
