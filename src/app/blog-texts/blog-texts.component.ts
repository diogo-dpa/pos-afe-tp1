import { Component, Input, OnInit } from '@angular/core';
import { BlogContents, BlogContentType } from './consts';

@Component({
  selector: 'app-blog-texts',
  templateUrl: './blog-texts.component.html',
  styleUrls: ['./blog-texts.component.sass'],
})
export class BlogTextsComponent implements OnInit {
  constructor() {
    this.blogContent = BlogContents;
  }

  ngOnInit(): void {}
  @Input() blogContent: BlogContentType[];
}
