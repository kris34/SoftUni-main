import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ITheme } from 'src/app/shared/interfaces/themes';

@Injectable({
  providedIn: 'root',
})
export class ThemeResolver implements Resolve<ITheme | null> {
  constructor(private api: ApiService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ITheme | null | Observable<ITheme> | Promise<ITheme> {
    const themeID = route.params['id'];
    if (!themeID) {
      this.router.navigate('/theme/recent');
      return null;
    }
    return this.api.loadTheme(themeID);
  }
}
