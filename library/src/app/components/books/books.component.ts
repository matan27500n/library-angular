import { AuthorService } from './../../services/author.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  book = new Book();
  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
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
