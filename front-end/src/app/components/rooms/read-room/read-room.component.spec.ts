import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRoomComponent } from './read-room.component';

describe('ReadRoomComponent', () => {
  let component: ReadRoomComponent;
  let fixture: ComponentFixture<ReadRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
