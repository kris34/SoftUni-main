import { Component } from '@angular/core';
import { ICar } from 'src/models/carInterface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  car: ICar = {
    make: 'Audi',
    model: 'A4',
    id: 1,
  };

  constructor() {}
  
}
