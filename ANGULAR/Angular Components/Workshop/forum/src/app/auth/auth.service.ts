import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = { username: 'John' } as any

  get isLoggedIn() {
    return this.user != null;
  }

  constructor() {}
}
