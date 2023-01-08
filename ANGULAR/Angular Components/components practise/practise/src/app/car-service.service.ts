import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICAR } from 'src/interfaces/car';

@Injectable({
  providedIn: 'root',
})

export class CarServiceService {
  private _url: string = '/src/assets/cars.json';
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<ICAR[]>(this._url);
  }
}
