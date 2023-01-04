import { Injectable } from '@angular/core';
import { ICar } from 'src/models/carInterface';
import { CARS } from 'src/models/mock-cars';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  getCars(): ICar[] {
    return CARS;
  }
}
