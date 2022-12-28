import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDesComponent } from './top-des.component';

describe('TopDesComponent', () => {
  let component: TopDesComponent;
  let fixture: ComponentFixture<TopDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
