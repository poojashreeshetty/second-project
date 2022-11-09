import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAllDilogueComponent } from './remove-all-dilogue.component';

describe('RemoveAllDilogueComponent', () => {
  let component: RemoveAllDilogueComponent;
  let fixture: ComponentFixture<RemoveAllDilogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAllDilogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveAllDilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
