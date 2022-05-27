import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazoncardComponent } from './amazoncard.component';

describe('AmazoncardComponent', () => {
  let component: AmazoncardComponent;
  let fixture: ComponentFixture<AmazoncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazoncardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazoncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
