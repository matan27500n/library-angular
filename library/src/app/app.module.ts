import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Page404Component } from './components/page404/page404.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { AuthorsDetailsComponent } from './components/authors-details/authors-details.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { RegisterComponent } from './components/register/register.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    BooksComponent,
    Page404Component,
    PurchasesComponent,
    AuthorsDetailsComponent,
    CustomersDetailsComponent,
    AddBookComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
