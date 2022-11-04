import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminDilogComponent } from './add-admin-dilog.component';

describe('AddAdminDilogComponent', () => {
  let component: AddAdminDilogComponent;
  let fixture: ComponentFixture<AddAdminDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminDilogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
