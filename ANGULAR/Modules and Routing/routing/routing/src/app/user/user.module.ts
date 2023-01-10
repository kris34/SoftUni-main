import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ActivatedRoute } from '@angular/router';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    
  ],
  exports: [
    ListComponent,
    DetailsComponent
  ]
})
export class UserModule { }
