import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { AppEmailDirective } from './validators/app-email-directive';
import { LoaderComponent } from './loader/loader.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';


@NgModule({
  declarations: [
    WelcomeMessageComponent,
    AppEmailDirective,
    LoaderComponent,
    ShortenPipe,
    ElapsedTimePipe,
    
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    WelcomeMessageComponent,
    AppEmailDirective,
    LoaderComponent,
    ShortenPipe,
    ElapsedTimePipe
  ],
})
export class SharedModule {}
