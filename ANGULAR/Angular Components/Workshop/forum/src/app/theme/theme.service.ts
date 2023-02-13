import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITheme } from '../shared/interfaces/themes';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private http: HttpClient) {}

  getAllThemes() {
    return this.http.get<ITheme[]>('/api/themes');
  }

  getTheme(id: string) {
    return this.http.get<ITheme>('/api/themes/' + id);
  }
}
