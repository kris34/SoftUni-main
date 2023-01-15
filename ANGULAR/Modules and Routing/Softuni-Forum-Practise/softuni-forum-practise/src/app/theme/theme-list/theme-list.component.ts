import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ITheme } from 'src/app/shared/interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss'],
})
export class ThemeListComponent implements OnInit {
  themes: ITheme[] | null = null;


  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.loadThemes().subscribe({
      next: (v) => {
        this.themes = v;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
