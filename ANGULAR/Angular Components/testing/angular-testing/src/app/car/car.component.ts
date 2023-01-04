import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/models/carInterface';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  selectedCar?: ICar;

  cars: ICar[] = [];

  constructor(private carService: CarService) {}

  onSelect(car: ICar): void {
    this.selectedCar = car;
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe((cars) => (this.cars = cars));
  }
}
