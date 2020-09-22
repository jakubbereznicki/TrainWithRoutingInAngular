import { Component, OnInit } from '@angular/core';
import { ArticlesMock } from 'src/app/articles';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  articles = [];

  ngOnInit() {
    this.articles = ArticlesMock;
  }
}
