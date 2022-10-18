import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceHeaderComponent } from './cource-header.component';

describe('CourceHeaderComponent', () => {
  let component: CourceHeaderComponent;
  let fixture: ComponentFixture<CourceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
