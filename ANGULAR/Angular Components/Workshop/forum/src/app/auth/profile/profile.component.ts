import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { IUser } from 'src/app/shared/interfaces';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  get user() { 
    const {username, email , tel: telephone} = this.auth.user!
    const [ext, tel] = telephone.split(" ")
    return { 
       username,
       email,
       tel,
       ext
    }
  }

  form = this.fb.group({ 
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    ext: [''],
    tel: ['']
  })


  constructor(private fb: FormBuilder, private auth: AuthService) {}

  
}
