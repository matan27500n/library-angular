import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor() { }

  getToken(){
    return localStorage.getItem('token');
  }
}
