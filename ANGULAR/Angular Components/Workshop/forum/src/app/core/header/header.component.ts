import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  get user(){ 
    return this.authService.user
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
}
