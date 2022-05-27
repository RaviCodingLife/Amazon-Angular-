import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonfetchComponent } from './jsonfetch.component';

describe('JsonfetchComponent', () => {
  let component: JsonfetchComponent;
  let fixture: ComponentFixture<JsonfetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonfetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonfetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
