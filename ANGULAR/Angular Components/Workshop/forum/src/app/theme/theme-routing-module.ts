import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeResolver } from './resolvers/there.resolver';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';

const routes: Routes = [
  {
    path: 'recent',
    component: MainComponent,
  },
  {
    path: 'new',
    component: NewThemeComponent,
  },
  {
    path: 'details/:id',
    resolve: {
      theme: ThemeResolver,
    },
    component: ThemeDetailsComponent,
  },
];

export const ThemeRoutingModule = RouterModule.forChild(routes);
