import { Injectable } from '@angular/core';
import { ICar } from 'src/models/carInterface';
import { CARS } from 'src/models/mock-cars';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  getCars(): Observable<ICar[]> {
    const cars = of(CARS);
    return cars;
  }
}
