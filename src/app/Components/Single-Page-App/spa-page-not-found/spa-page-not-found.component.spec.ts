import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaPageNotFoundComponent } from './spa-page-not-found.component';

describe('SpaPageNotFoundComponent', () => {
  let component: SpaPageNotFoundComponent;
  let fixture: ComponentFixture<SpaPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
