import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ICar } from '../interfaces/carInterface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  cars: ICar[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe({
      next: (x) => (this.cars = x),
      complete: () => console.log('Completed'),
    });
  }
}
