import { Component, OnInit } from '@angular/core';
import { Article } from 'models/article.model';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})

export class ArticlesComponent implements OnInit {
  articles: Article[] | undefined;
  constructor() {}

  ngOnInit() {
    this.articles = new ArticleData().getData();
  }
}
