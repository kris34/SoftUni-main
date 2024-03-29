import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/posts';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss'],
})
export class RecentPostsComponent implements OnInit {
  posts: IPost[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (v) => {
        this.posts = v;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
