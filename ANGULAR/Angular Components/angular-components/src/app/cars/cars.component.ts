import { Component } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';

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
    {
       make: 'VolksWagen',
       price: 6000
    },
  ];

  showPrice = true;
  constructor() {}

  changeTitleHandler(title: string) {
    this.shopTitle = title;
  }

  showPriceOnClick(event: MouseEvent) {
    this.showPrice = !this.showPrice;
  }

  customEventHandler($event: ICustomEvent) {
    console.log($event);
  }
}
