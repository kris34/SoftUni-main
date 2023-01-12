import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import {  RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, MainComponent, HeaderComponent],
})
export class CoreModule {}
