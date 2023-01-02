import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnseallComponent } from './onseall.component';

describe('OnseallComponent', () => {
  let component: OnseallComponent;
  let fixture: ComponentFixture<OnseallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnseallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnseallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
