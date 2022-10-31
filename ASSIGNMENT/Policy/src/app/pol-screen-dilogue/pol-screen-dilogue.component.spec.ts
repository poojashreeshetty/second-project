import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolScreenDilogueComponent } from './pol-screen-dilogue.component';

describe('PolScreenDilogueComponent', () => {
  let component: PolScreenDilogueComponent;
  let fixture: ComponentFixture<PolScreenDilogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolScreenDilogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolScreenDilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
