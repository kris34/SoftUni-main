import { Component } from '@angular/core';
import { ICar } from 'src/models/carInterface';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent {
  cars: ICar[] = [];

  selectedCar?: ICar;

  constructor(private carService: CarService) {}

  onSelect(car: ICar): void {
    this.selectedCar = car;
  }
}
