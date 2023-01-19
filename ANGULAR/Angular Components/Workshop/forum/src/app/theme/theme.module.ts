import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing-module';
import { SharedModule } from '../shared/shared.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { MainComponent } from './main/main.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ThemeListComponent,
    NewThemeComponent,
    ThemeDetailsComponent,
    MainComponent,
    RecentPostsComponent,
  ],
  imports: [CommonModule, ThemeRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [ThemeListComponent, MainComponent],
})
export class ThemeModule {}
