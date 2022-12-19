import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Face4Component } from './face4.component';

describe('Face4Component', () => {
  let component: Face4Component;
  let fixture: ComponentFixture<Face4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Face4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Face4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
