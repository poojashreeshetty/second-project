import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuestionDailogueComponent } from './list-question-dailogue.component';

describe('ListQuestionDailogueComponent', () => {
  let component: ListQuestionDailogueComponent;
  let fixture: ComponentFixture<ListQuestionDailogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuestionDailogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListQuestionDailogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
