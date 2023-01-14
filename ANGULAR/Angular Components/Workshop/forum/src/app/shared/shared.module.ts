import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';



@NgModule({
  declarations: [
    WelcomeMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
