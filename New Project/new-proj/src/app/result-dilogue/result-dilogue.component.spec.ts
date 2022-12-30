import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDilogueComponent } from './result-dilogue.component';

describe('ResultDilogueComponent', () => {
  let component: ResultDilogueComponent;
  let fixture: ComponentFixture<ResultDilogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultDilogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultDilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
