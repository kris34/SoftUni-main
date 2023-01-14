import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthActivate implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const loginReq = route.data['loginReq'];
    if (loginReq == undefined || this.auth.isLoggedIn == loginReq) {
      return true;
    }
    const returnUrl = route.url.map((u) => u.path).join('/');

    return this.router.createUrlTree(['/auth/login'], {
      queryParams: { returnUrl },
    });
  }
}
