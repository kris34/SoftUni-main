import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {

  @Input() car!: { make: string; price: number };
  @Input() showPrice!: boolean;

  constructor() {}
}
