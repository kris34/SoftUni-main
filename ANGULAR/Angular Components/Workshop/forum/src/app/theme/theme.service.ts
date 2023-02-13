import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITheme } from '../shared/interfaces/themes';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private http: HttpClient) {}

  getAllThemes(maxCount?: number) {
    let url = '/api/themes';

    if (maxCount) {
      url += '?limit=5';
    }
    return this.http.get<ITheme[]>('/api/themes');
  }

  getTheme(id: string) {
    return this.http.get<ITheme>('/api/themes/' + id);
  }

  createTheme(name: string, text: string) {
    return this.http.post<ITheme>('/api/themes', {
      themeName: name,
      postText: text,
    });
  }

  updateTheme(id: string, name: string, text: string) {
    return this.http.put<ITheme>('/api/themes' + id, {
      themeName: name,
      themeText: text,
    });
  }

  deleteTheme(themeId: string, postId: string) {
    return this.http.delete<ITheme>('/api/delete' + themeId + '/post' + postId);
  }


}
