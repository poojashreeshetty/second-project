import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeallOngoingComponent } from './seall-ongoing.component';

describe('SeallOngoingComponent', () => {
  let component: SeallOngoingComponent;
  let fixture: ComponentFixture<SeallOngoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeallOngoingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeallOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
