import { Injectable } from '@angular/core';
import { ICar } from 'src/models/carInterface';
import { Observable, of } from 'rxjs';
import { CARS } from 'src/models/mock-cars';

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

//create GET method
//get the cars from the mock service with an interface from the interface file



