import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFace5Component } from './application-face5.component';

describe('ApplicationFace5Component', () => {
  let component: ApplicationFace5Component;
  let fixture: ComponentFixture<ApplicationFace5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationFace5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationFace5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
