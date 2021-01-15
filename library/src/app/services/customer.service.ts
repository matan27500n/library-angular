import { Book } from 'src/app/models/book';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenManagerService } from './token-manager.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
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

  public purchaseBook(book: Book): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:8080/customer/purchaseBook/',
      book
    );
  }

  public setCustomerID(id: number): Observable<any> {
    return this.httpClient.put<any>(
      'http://localhost:8080/customer/setCustomerID/' + id,
      null
    );
  }

  public getCustomerID(email: string, password: string): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:8080/customer/getCustomerID/' + email + '/' + password
    );
  }

  public getCustomerBooks(): Observable<any> {
    return this.httpClient.get<any>(
      'http://localhost:8080/customer/getCustomerBooks'
    );
  }

  public cancelPurchase(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      'http://localhost:8080/customer/cancelPurchase/' + id
    );
  }
}
