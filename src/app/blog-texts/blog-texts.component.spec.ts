import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTextsComponent } from './blog-texts.component';

describe('BlogTextsComponent', () => {
  let component: BlogTextsComponent;
  let fixture: ComponentFixture<BlogTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTextsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
