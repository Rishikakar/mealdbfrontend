import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmealbyfirstletterComponent } from './searchmealbyfirstletter.component';

describe('SearchmealbyfirstletterComponent', () => {
  let component: SearchmealbyfirstletterComponent;
  let fixture: ComponentFixture<SearchmealbyfirstletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmealbyfirstletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmealbyfirstletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
