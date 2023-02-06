import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss'],
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getProfile().subscribe({
      next: (user) => {
        this.auth.user = user;
        this.isAuthenticating = false;
      },
      error: () => {
        this.auth.user = null;
        this.isAuthenticating = false;
      },
    });
  }
}
