import { LoginService } from './../../services/login.service';
import { AuthorService } from './../../services/author.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from './../../models/book';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  id: number;
  message: string;
  category: Category;
  public book = new Book();
  constructor(
    private router: Router,
    private authorService: AuthorService,
    private activate: ActivatedRoute,
    private loginService: LoginService
  ) {
    this.id = Number(activate.snapshot.params.id);
  }

  ngOnInit(): void {}

  addBook(book: Book) {
    this.authorService.addBook(book).subscribe(
      (res) => {
        this.message = 'added successfully!';
        setTimeout(() => {
          this.message = '';
          this.router.navigateByUrl('books');
        }, 2500);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
