import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaCom2Component } from './spa-com2.component';

describe('SpaCom2Component', () => {
  let component: SpaCom2Component;
  let fixture: ComponentFixture<SpaCom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaCom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaCom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
