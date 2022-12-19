import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsNearbyComponent } from './brands-nearby.component';

describe('BrandsNearbyComponent', () => {
  let component: BrandsNearbyComponent;
  let fixture: ComponentFixture<BrandsNearbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsNearbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
