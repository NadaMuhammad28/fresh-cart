import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductscComponent } from './category-productsc.component';

describe('CategoryProductscComponent', () => {
  let component: CategoryProductscComponent;
  let fixture: ComponentFixture<CategoryProductscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryProductscComponent]
    });
    fixture = TestBed.createComponent(CategoryProductscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
