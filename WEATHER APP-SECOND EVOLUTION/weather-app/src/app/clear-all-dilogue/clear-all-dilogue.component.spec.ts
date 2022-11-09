import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearAllDilogueComponent } from './clear-all-dilogue.component';

describe('ClearAllDilogueComponent', () => {
  let component: ClearAllDilogueComponent;
  let fixture: ComponentFixture<ClearAllDilogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearAllDilogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearAllDilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
