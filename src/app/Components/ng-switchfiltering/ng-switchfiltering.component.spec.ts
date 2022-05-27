import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchfilteringComponent } from './ng-switchfiltering.component';

describe('NgSwitchfilteringComponent', () => {
  let component: NgSwitchfilteringComponent;
  let fixture: ComponentFixture<NgSwitchfilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchfilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchfilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
