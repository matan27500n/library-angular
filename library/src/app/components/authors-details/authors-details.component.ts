import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { AdminService } from './../../services/admin.service';
import { Author } from './../../models/author';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.css'],
})
export class AuthorsDetailsComponent implements OnInit {
  authors: Author[] = [];
  constructor(
    private adminService: AdminService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.loginService.type === 'Admin') {
      this.getAllAuthors();
    } else {
      this.router.navigateByUrl('**');
    }
  }

  getAllAuthors() {
    this.adminService.getAllAuthors().subscribe(
      (res) => {
        this.authors = res;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  deleteAuthor(id: number) {
    if (confirm('Are you want do delete this author?')) {
      this.adminService.deleteAuthor(id).subscribe(
        (res) => {
          this.authors = this.authors.filter((author) => author.id !== id);
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }
}
