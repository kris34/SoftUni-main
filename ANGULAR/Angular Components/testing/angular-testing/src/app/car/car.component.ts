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
    this.carService.getCars().subscribe((x) => (this.cars = x));
  }

  //create a car variable which has a type of an interface
  //create the getCars method which INJECTS the cars from the mock-cars through the car service to the cars variable
}