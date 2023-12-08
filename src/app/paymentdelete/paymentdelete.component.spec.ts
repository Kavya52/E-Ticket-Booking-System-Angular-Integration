import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdeleteComponent } from './paymentdelete.component';

describe('PaymentdeleteComponent', () => {
  let component: PaymentdeleteComponent;
  let fixture: ComponentFixture<PaymentdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
