import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCustomerComponent } from './http-customer.component';

describe('HttpCustomerComponent', () => {
  let component: HttpCustomerComponent;
  let fixture: ComponentFixture<HttpCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
