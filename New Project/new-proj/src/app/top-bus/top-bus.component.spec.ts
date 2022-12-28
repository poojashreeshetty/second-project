import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBusComponent } from './top-bus.component';

describe('TopBusComponent', () => {
  let component: TopBusComponent;
  let fixture: ComponentFixture<TopBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
