import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
  },

  {
    path: '/auth/register',
    component: RegisterComponent,
  },
];

export const AuthRoutingMoudle = RouterModule.forChild(routes);
