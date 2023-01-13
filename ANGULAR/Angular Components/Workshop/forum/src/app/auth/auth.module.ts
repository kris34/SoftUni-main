import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingMoudle } from './auth-routing-module';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingMoudle
  ]
})
export class AuthModule { }
