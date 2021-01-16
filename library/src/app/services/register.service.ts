import { Customer } from './../models/customer';
import { Author } from './../models/author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  public registerAuthor(author: Author): Observable<any> {
    return this.httpClient.post<Author>(
      'http://localhost:8080/registerAuthor',
      author
    );
  }

  public registerCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post<Customer>(
      'http://localhost:8080/registerCustomer',
      customer
    );
  }
}
