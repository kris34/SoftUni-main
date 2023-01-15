import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WelcomeComponent],
  imports: [CommonModule, CoreRoutingModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {


}
