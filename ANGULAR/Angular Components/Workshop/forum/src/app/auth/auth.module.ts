import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingMoudle } from './auth-routing-module';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    ProfileEditComponent,
  ],
  imports: [CommonModule, AuthRoutingMoudle, FormsModule, SharedModule, ReactiveFormsModule],
})
export class AuthModule {}
