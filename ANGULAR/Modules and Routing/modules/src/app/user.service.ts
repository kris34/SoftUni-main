import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClientModule) {

  }

   getUsers(){ 

   }
}
