import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public author = new Author();
  public customer = new Customer();
  public type: string;
  constructor() {}

  ngOnInit(): void {}
}
