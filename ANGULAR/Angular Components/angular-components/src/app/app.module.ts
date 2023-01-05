import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';


@NgModule({
  //Template specific items
  declarations: [AppComponent, CarComponent],
  imports: [
    BrowserModule, //includes common module
  ],
  providers: [], //used for dependency injection
  bootstrap: [AppComponent],
})
export class AppModule {}
