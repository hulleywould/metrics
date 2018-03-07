import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChoiceComponent } from './table-choice.component';

describe('TableChoiceComponent', () => {
  let component: TableChoiceComponent;
  let fixture: ComponentFixture<TableChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
