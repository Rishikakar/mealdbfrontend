import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTablesComponent } from './food-tables.component';

describe('FoodTablesComponent', () => {
  let component: FoodTablesComponent;
  let fixture: ComponentFixture<FoodTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
