import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Router, RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent],
  imports: [CommonModule, RouterModule, UserRoutingModule],
  exports: [UserListComponent],
})
export class UserModule {
  constructor(private router: Router) {}
}
