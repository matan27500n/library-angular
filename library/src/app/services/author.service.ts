import { Observable } from 'rxjs';
import { Book } from './../models/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenManagerService } from './token-manager.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(
    private httpClient: HttpClient,
    private tokenManager: TokenManagerService
  ) {}

  public resetToken() {
    const headers = new HttpHeaders({
      'Coupon-System-Header': this.tokenManager.getToken(),
    });
    const options = { headers: headers };
    return options;
  }

  public getAuthorID(email: string, password: string): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:8080/author/getAuthorID/' + email + '/' + password
    );
  }

  public getOneBook(id: number): Observable<Book> {
    const headers = new HttpHeaders({
      'Coupon-System-Header': this.tokenManager.getToken(),
    });
    const options = { headers: headers };
    return this.httpClient.get<Book>(
      'http://localhost:8080/author/getOneBook/' + id,
      this.resetToken()
    );
  }

  public addBook(book: Book): Observable<any> {
    return this.httpClient.post<Book>(
      'http://localhost:8080/author/addBook/',
      book
    );
  }

  public updateBook(book: Book): Observable<any> {
    return this.httpClient.put<Book>(
      'http://localhost:8080/author/updateBook/',
      book,
      this.resetToken()
    );
  }

  public deleteBook(id: number): Observable<any> {
    return this.httpClient.delete(
      'http://localhost:8080/author/deleteBook/' + id
    );
  }

  public getAllBooks(id: number): Observable<any> {
    return this.httpClient.get<Book[]>(
      'http://localhost:8080/author/getAllBooks/' + id,
      this.resetToken()
    );
  }
}
