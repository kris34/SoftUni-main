import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})


export class FooterComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {}

  goToUrl(): void {
    this.document.location.href = 'https://stackoverflow.com';
}


}
