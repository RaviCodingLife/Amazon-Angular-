import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToDoListComponent } from './parent-to-do-list.component';

describe('ParentToDoListComponent', () => {
  let component: ParentToDoListComponent;
  let fixture: ComponentFixture<ParentToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentToDoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
