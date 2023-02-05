import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/constants';
import {
  appEmailValidator,
  sameValueGroupValidator,
} from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  domains = appEmailDomains;

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(this.domains)]],
    tel: [],
    ext: [],
    pass: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: [],
      },
      {
        validators: [sameValueGroupValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router ) {}

  registerHandler() {
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      pass: { password, rePassword } = {},
      tel,
    } = this.form.value;

    this.auth
      .register(username!, email!, password!, rePassword!, tel! || undefined)
      .subscribe((user) => {
       /*  this.auth.user = user;
       this.router.navigate(["/theme/recent"]) */
       this.router.navigate(["/auth/login"])
      });
  }
}
