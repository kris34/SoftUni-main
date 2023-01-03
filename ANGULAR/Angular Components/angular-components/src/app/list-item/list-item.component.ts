import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICustomEvent {
  test: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() car!: { make: string; price: number };
  @Input() showPrice!: boolean;

  @Output() customEvent = new EventEmitter<ICustomEvent>();

  constructor() {}

  selectClickHandler() {
    this.customEvent.emit({ test: 123 });
  }
}
