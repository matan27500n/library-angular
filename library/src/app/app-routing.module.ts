import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AuthorsDetailsComponent } from './components/authors-details/authors-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { Page404Component } from './components/page404/page404.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books', component: BooksComponent },
  { path: 'purchases', component: PurchasesComponent },
  { path: 'authors-details', component: AuthorsDetailsComponent },
  { path: 'customers-details', component: CustomersDetailsComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
