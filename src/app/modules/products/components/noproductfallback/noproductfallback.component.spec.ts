import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoproductfallbackComponent } from './noproductfallback.component';

describe('NoproductfallbackComponent', () => {
  let component: NoproductfallbackComponent;
  let fixture: ComponentFixture<NoproductfallbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoproductfallbackComponent]
    });
    fixture = TestBed.createComponent(NoproductfallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
