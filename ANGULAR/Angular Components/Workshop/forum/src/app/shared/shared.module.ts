import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { AppEmailDirective,  } from './validators/app-email-directive';

@NgModule({
  declarations: [WelcomeMessageComponent, AppEmailDirective],
  imports: [CommonModule, RouterModule],
  exports: [WelcomeMessageComponent, AppEmailDirective ],
})
export class SharedModule {}
