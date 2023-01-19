import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent {
  constructor(private router: Router) {}

  toggleEditPage(){ 
    return this.router.navigate(['/auth/edit'])
  }
}
