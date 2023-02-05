import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './theme/main/main.component';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './theme/theme.module';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [AppComponent ],
  imports: [
    ThemeModule,
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [
    appInterceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
