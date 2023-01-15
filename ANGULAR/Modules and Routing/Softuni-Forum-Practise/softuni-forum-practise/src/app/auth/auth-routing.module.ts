import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'auth/register',
    component: RegisterComponent,
    
  },
  {
    path: 'auth/login',
    component: LoginComponent,
   
  },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
