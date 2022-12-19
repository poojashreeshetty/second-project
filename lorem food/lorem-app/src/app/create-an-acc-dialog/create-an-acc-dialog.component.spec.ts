import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnAccDialogComponent } from './create-an-acc-dialog.component';

describe('CreateAnAccDialogComponent', () => {
  let component: CreateAnAccDialogComponent;
  let fixture: ComponentFixture<CreateAnAccDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnAccDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAnAccDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
