import { Component, OnInit } from '@angular/core';
import { ICAR } from 'src/interfaces/car';
import { ITheme } from 'src/interfaces/theme';
import { CarServiceService } from '../car-service.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})


export class CarListComponent implements OnInit {
  carList: ITheme[] = [];
  constructor(private api: CarServiceService) {}

  ngOnInit(): void {
    this.api.getCars().subscribe({
      next: (v) => (this.carList = v),
    });
    console.log(this.carList);
  }
}
