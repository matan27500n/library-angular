import { Author } from './../../models/author';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public author = new Author();
  constructor() {}

  ngOnInit(): void {}
}
