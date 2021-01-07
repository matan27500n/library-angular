import { AuthorService } from './../../services/author.service';
import { Router } from '@angular/router';
import { Book } from './../../models/book';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  category: Category;
  public book = new Book();
  constructor(private router: Router, private authorService: AuthorService) {}

  ngOnInit(): void {}

  addBook(book: Book) {
    this.authorService.addBook(book).subscribe(
      (res) => {
        alert('added successfully');
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
