import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangeComponent } from './ng-on-change.component';

describe('NgOnChangeComponent', () => {
  let component: NgOnChangeComponent;
  let fixture: ComponentFixture<NgOnChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
