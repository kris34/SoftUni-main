import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { ThemeListComponent } from './theme-list/theme-list.component';

@NgModule({
  declarations: [AppComponent, RecentPostsComponent, ThemeListComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
