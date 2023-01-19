import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss'],
})
export class NewThemeComponent {
  form = this.fb.group({
    themeTitle: ['', [Validators.minLength(5), Validators.required]],
    themeContent: []
  });

  constructor(private fb: FormBuilder) {}
}
