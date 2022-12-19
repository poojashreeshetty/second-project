import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Face3Component } from './face3.component';

describe('Face3Component', () => {
  let component: Face3Component;
  let fixture: ComponentFixture<Face3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Face3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Face3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
