import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/interfaces/user';

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

@Injectable({
  providedIn: 'root',
})

export class UserServiceService {

  constructor(private http: HttpClient) {}

   getUsers(){ 
    return this.http.get<IUser[]>(apiUrl)
   }

   
}
