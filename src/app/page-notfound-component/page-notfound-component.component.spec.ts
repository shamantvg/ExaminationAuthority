import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotfound } from './page-notfound-component.component';

describe('PageNotfound', () => {
  let component: PageNotfound;
  let fixture: ComponentFixture<PageNotfound>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotfound ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotfound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
