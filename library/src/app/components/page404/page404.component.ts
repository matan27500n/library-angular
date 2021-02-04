import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css'],
})
export class Page404Component implements OnInit {
  errorMessage =
    'Hey it seem you entered wrong address, you will continue to the login page';
  constructor(private router: Router) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigateByUrl('login');
    // }, 3000);
  }
}
