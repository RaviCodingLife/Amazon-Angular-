import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniToDoComponent } from './ani-to-do.component';

describe('AniToDoComponent', () => {
  let component: AniToDoComponent;
  let fixture: ComponentFixture<AniToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
