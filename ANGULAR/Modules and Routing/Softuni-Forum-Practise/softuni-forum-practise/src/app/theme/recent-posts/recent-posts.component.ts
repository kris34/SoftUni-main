import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IPost } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss'],
})
export class RecentPostsComponent implements OnInit {
  posts: IPost[] | null = null;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.loadRecentPosts(5).subscribe({
      next: (v) => {
        this.posts = v;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
