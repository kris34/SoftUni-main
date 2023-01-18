import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({ 
    username: [],
    email: [],
    tel: [],
    pass: this.fb.group({ 
      password: [],
      repass: []
    }),
    validators: []
  })

  constructor(private fb: FormBuilder){ 

  }

}
