import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  shopTitle: string = 'Simeonovo car dealership';

  cars = [
    {
      make: 'Audi',
      price: 5000,
    },
    { make: 'VW', price: 6000 },
  ];
  
  showPrice = true;
  constructor() {}

  showPriceOnClick() {
    this.showPrice = !this.showPrice;
    console.log('Car bought');
  }
}
