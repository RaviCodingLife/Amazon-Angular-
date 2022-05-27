import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIncDecComponent } from './counter-inc-dec.component';

describe('CounterIncDecComponent', () => {
  let component: CounterIncDecComponent;
  let fixture: ComponentFixture<CounterIncDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterIncDecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterIncDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
