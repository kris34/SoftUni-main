import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { ThemeListComponent } from './theme-list/theme-list.component';



@NgModule({
  declarations: [MainComponent, RecentPostsComponent, ThemeListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class ThemeModule { }
