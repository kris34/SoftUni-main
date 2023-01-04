import { Component } from '@angular/core';
import { ICar } from 'src/models/carInterface';
import { CARS } from 'src/models/mock-cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})


export class CarComponent {
  cars = CARS;

  selectedCar?: ICar;

  constructor() {}

  onSelect(car: ICar): void {
    this.selectedCar = car;
  }
}
