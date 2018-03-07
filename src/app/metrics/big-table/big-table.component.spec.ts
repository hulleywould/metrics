import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTableComponent } from './big-table.component';

describe('BigTableComponent', () => {
  let component: BigTableComponent;
  let fixture: ComponentFixture<BigTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
