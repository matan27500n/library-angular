import { Author } from './../models/author';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenManagerService } from './token-manager.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
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

  public logout(): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:8080/admin/logout');
  }

  public addAuthor(author: Author): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:8080/admin/addAuthor',
      author,
      this.resetToken()
    );
  }

  public updateAuthor(author: Author): Observable<any> {
    return this.httpClient.put<any>(
      'http://localhost:8080/admin/updateAuthor',
      author
    );
  }

  public deleteAuthor(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      'http://localhost:8080/admin/deleteAuthor/' + id
    );
  }

  public getOneAuthor(id: number): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:8080/admin/getOneAuthor/' + id
    );
  }

  public getAllAuthors(): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:8080/admin/getAllAuthors',
      this.resetToken()
    );
  }

  public deleteBook(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      'http://localhost:8080/admin/deleteBook/' + id
    );
  }

  public getOneBook(id: number): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:8080/admin/getOneBook/' + id
    );
  }

  public getAllBooks(): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:8080/admin/getAllBooks',
      this.resetToken()
    );
  }

  public getOneCustomer(id: number): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:8080/admin/getOneCustomer/' + id
    );
  }

  public getAllCustomers(): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:8080/admin/getAllCustomers'
    );
  }
}
