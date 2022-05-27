import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterdecoratorComponent } from './parameterdecorator.component';

describe('ParameterdecoratorComponent', () => {
  let component: ParameterdecoratorComponent;
  let fixture: ComponentFixture<ParameterdecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterdecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
