import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedgingComponent } from './hedging.component';

describe('HedgingComponent', () => {
  let component: HedgingComponent;
  let fixture: ComponentFixture<HedgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
