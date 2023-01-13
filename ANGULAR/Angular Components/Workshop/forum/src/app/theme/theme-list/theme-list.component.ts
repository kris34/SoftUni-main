import { Component, OnInit } from '@angular/core';
import { ITheme } from 'src/app/shared/interfaces/themes';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss'],
})
export class ThemeListComponent implements OnInit {
  themeList: ITheme[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (v) => {
        this.themeList = v;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
