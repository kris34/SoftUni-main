import { Component, Input } from '@angular/core';
import { ICar } from 'src/models/carInterface';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent {
  @Input() car?: ICar;
}
