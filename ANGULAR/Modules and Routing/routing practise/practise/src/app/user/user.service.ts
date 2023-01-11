import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUSer } from '../interfaces/user';

const apiUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<IUSer[]>(apiUrl);
  }

  
}
