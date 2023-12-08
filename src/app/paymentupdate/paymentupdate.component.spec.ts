import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentupdateComponent } from './paymentupdate.component';

describe('PaymentupdateComponent', () => {
  let component: PaymentupdateComponent;
  let fixture: ComponentFixture<PaymentupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
