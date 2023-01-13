import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing-module';
import { SharedModule } from '../shared/shared.module';
import { NewThemeComponent } from './new-theme/new-theme.component';

@NgModule({
  declarations: [ThemeListComponent, NewThemeComponent],
  imports: [CommonModule, ThemeRoutingModule, SharedModule],
  exports: [ThemeListComponent],
})
export class ThemeModule {}
