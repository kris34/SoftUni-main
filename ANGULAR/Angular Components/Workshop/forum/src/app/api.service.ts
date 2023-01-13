import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ITheme } from 'src/app/shared/interfaces/themes';
import { IPost } from 'src/app/shared/interfaces/posts';
const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadThemes() {
    return this.httpClient.get<ITheme[]>(`${apiURL}/themes`);
  }

  loadPosts(limit?: number) {
    return this.httpClient.get<IPost[]>(
      `${apiURL}/posts${limit ? `?limit=${limit}` : ``}`
    );
  }
}
