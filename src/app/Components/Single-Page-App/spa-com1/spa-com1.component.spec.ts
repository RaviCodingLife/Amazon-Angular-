import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaCom1Component } from './spa-com1.component';

describe('SpaCom1Component', () => {
  let component: SpaCom1Component;
  let fixture: ComponentFixture<SpaCom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaCom1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaCom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
