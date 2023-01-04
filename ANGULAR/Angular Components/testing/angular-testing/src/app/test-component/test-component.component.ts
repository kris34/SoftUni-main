import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent {
  car: string = 'Alfa romeo';

  constructor() {}

  changeMake(input: string): string {
    this.car = input;
    return this.car;
  }
}
