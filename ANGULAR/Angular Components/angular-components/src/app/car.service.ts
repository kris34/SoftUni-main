import { Injectable } from '@angular/core';
import { CARS } from './mock-car';
import { ICar } from './interfaces/carInterface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CarService {
  constructor() {}

  getCars(): Observable<ICar[]> {
    const cars = of(CARS)
    return cars
  }
}
