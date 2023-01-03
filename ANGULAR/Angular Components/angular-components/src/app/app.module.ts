import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  //Template specific items
  declarations: [AppComponent,  CarsComponent, ListItemComponent],
  imports: [
    BrowserModule, //includes common module
  ],
  providers: [], //used for dependency injection
  bootstrap: [AppComponent],
})
export class AppModule {}
