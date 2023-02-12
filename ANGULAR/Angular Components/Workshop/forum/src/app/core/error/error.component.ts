import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, filter, take } from 'rxjs';
import { APP_ERROR } from 'src/app/shared/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnDestroy {
  appError$ = this.appError.asObservable();

  constructor(
    @Inject(APP_ERROR) private appError: BehaviorSubject<Error | null>,
    private router: Router
  ) {
    this.appError$
      .pipe(
        debounceTime(0),
        take(1),
        filter((v) => !v)
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
  ngOnDestroy(): void {
    this.appError.next(null);
  }
}
