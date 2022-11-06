import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiDilogueComponent } from './edi-dilogue.component';

describe('EdiDilogueComponent', () => {
  let component: EdiDilogueComponent;
  let fixture: ComponentFixture<EdiDilogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiDilogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiDilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
