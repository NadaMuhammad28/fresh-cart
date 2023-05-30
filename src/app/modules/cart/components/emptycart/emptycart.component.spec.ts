import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptycartComponent } from './emptycart.component';

describe('EmptycartComponent', () => {
  let component: EmptycartComponent;
  let fixture: ComponentFixture<EmptycartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptycartComponent]
    });
    fixture = TestBed.createComponent(EmptycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
