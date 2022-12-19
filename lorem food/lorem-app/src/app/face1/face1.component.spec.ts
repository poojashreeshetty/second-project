import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Face1Component } from './face1.component';

describe('Face1Component', () => {
  let component: Face1Component;
  let fixture: ComponentFixture<Face1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Face1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Face1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
