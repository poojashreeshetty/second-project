import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemMaterialComponent } from './rem-material.component';

describe('RemMaterialComponent', () => {
  let component: RemMaterialComponent;
  let fixture: ComponentFixture<RemMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
