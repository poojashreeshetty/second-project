import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Face23Component } from './face23.component';

describe('Face23Component', () => {
  let component: Face23Component;
  let fixture: ComponentFixture<Face23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Face23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Face23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
