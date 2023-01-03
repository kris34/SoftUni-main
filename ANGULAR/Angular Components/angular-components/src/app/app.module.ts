import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  //Template specific items
  declarations: [AppComponent, ListComponent, CarsComponent],
  imports: [
    BrowserModule, //includes common module
  ],
  providers: [], //used for dependency injection
  bootstrap: [AppComponent],
})
export class AppModule {}
