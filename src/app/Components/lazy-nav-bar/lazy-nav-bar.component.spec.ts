import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyNavBarComponent } from './lazy-nav-bar.component';

describe('LazyNavBarComponent', () => {
  let component: LazyNavBarComponent;
  let fixture: ComponentFixture<LazyNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
