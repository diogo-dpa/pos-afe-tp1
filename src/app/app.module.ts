import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogTextsComponent } from './blog-texts/blog-texts.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogTextsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
