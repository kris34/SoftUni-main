import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'auth/register',
    component: RegisterComponent,
    data: {
      loginReq: false,
    },
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    data: {
      loginReq: false,
    },
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
    data: {
      loginReq: true,
    },
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    data: {
      loginReq: true,
    },
  },
];

export const AuthRoutingMoudle = RouterModule.forChild(routes);
