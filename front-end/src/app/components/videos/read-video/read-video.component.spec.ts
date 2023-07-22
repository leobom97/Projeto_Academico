import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadVideoComponent } from './read-video.component';

describe('ReadVideoComponent', () => {
  let component: ReadVideoComponent;
  let fixture: ComponentFixture<ReadVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
