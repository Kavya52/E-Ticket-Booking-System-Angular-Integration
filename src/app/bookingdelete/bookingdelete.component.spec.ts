import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingdeleteComponent } from './bookingdelete.component';

describe('BookingdeleteComponent', () => {
  let component: BookingdeleteComponent;
  let fixture: ComponentFixture<BookingdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
