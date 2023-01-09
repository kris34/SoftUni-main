import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICAR } from 'src/interfaces/car';
import { server } from 'src/assets/cars';
import { ITheme } from 'src/interfaces/theme';
const apiUrl = server.apiURL

@Injectable({
  providedIn: 'root',
})

export class CarServiceService {
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`);
  }
}
