import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { AppEmailDirective,  } from './validators/app-email-directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [WelcomeMessageComponent, AppEmailDirective, LoaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [WelcomeMessageComponent, AppEmailDirective, LoaderComponent ],
})
export class SharedModule {}
