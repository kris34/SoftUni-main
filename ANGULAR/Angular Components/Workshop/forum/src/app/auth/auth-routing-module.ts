import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../shared/guards/auth.activate';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'auth/register',
    canActivate:[AuthActivate],
    component: RegisterComponent,
    data: {
      loginReq: false,
    },
  },
  {
    path: 'auth/login',
    canActivate:[AuthActivate],
    component: LoginComponent,
    data: {
      loginReq: false,
    },
  },
  {
    path: 'auth/logout',
    canActivate:[AuthActivate],
    component: LogoutComponent,
    data: {
      loginReq: true,
    },
  },
  {
    path: 'auth/profile',
    canActivate:[AuthActivate],
    component: ProfileComponent,
    data: {
      loginReq: true,
    },
  },
  {
    path: 'auth/profile/edit',
    canActivate:[AuthActivate],
    component: ProfileEditComponent,
    data: {
      loginReq: true,
    },
  },
];

export const AuthRoutingMoudle = RouterModule.forChild(routes);
