import { Component, Input } from '@angular/core';
import { BlogContents } from './blog-texts/consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  template: `
    <app-blog-texts
      *ngFor="let blog of blogs"
      [blogContent]="blog"
    ></app-blog-texts>
  `,
})
export class AppComponent {
  title = 'pos-afe-tp1';
  @Input() blogContent = BlogContents;
}
