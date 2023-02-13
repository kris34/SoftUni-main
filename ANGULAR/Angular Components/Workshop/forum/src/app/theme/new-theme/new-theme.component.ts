import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss'],
})
export class NewThemeComponent {
  form = this.fb.group({
    themeTitle: ['', [Validators.minLength(5), Validators.required]],
    themeContent: ['', [Validators.minLength(10), Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private service: ThemeService,
    private router: Router
  ) {}

  createThemeHandler() {
    if (this.form.invalid) {
      return;
    }

    const { themeTitle, themeContent } = this.form.value;

    this.service.createTheme(themeTitle!, themeContent!).subscribe((theme) => {
      this.router.navigate(['/theme/recent']);
    });
  }
}
