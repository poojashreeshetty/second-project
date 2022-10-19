import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyHomeComponent } from './policy-home.component';

describe('PolicyHomeComponent', () => {
  let component: PolicyHomeComponent;
  let fixture: ComponentFixture<PolicyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
