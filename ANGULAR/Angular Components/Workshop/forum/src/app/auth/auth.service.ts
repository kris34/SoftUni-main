import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = null;

  get isLoggedIn() {
    return this.user != null;
  }

  constructor(private http: HttpClient) {}

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel: string
  ) {
    return this.http.post<IUser>('/api/register', {
      username,
      email,
      password,
      rePassword,
      tel,
    });
  }

  login(email: string, password: string) {
    return this.http.post<any>('/api/login', { email, password });
  }
}
