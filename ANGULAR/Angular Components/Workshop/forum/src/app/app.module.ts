import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { MainComponent } from './main/main.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, RecentPostsComponent, ThemeListComponent, MainComponent],
  imports: [BrowserModule,AuthModule, AppRoutingModule, CoreModule, HttpClientModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
