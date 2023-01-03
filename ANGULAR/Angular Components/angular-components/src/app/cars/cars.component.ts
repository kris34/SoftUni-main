import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  shopTitle = 'Simeonovo car dealership';

  cars: string[];

  constructor() {
    this.cars = ['Audi', 'VW', 'Alfa Romeo', 'Yotota'];
  }
}
