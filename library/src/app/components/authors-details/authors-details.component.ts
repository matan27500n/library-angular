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
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllAuthors();
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
}
