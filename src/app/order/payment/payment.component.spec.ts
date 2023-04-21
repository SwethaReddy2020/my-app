import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for payment form', () => {
    expect(component.paymentForm.value).toEqual({
      cardNumber: '',
      cardHolderName: '',
      expirationMonth: '',
      expirationYear: '',
      cvv: '',
    });
  });

  it('should have required validators for payment form fields', () => {
    const cardNumber = component.paymentForm.controls['cardNumber'];
    expect(cardNumber.valid).toBeFalsy();
    expect(cardNumber.errors['required']).toBeTruthy();

    const cardHolderName = component.paymentForm.controls['cardHolderName'];
    expect(cardHolderName.valid).toBeFalsy();
    expect(cardHolderName.errors['required']).toBeTruthy();

    const expirationMonth = component.paymentForm.controls['expirationMonth'];
    expect(expirationMonth.valid).toBeFalsy();
    expect(expirationMonth.errors['required']).toBeTruthy();

    const expirationYear = component.paymentForm.controls['expirationYear'];
    expect(expirationYear.valid).toBeFalsy();
    expect(expirationYear.errors['required']).toBeTruthy();

    const cvv = component.paymentForm.controls['cvv'];
    expect(cvv.valid).toBeFalsy();
    expect(cvv.errors['required']).toBeTruthy();
  });

  it('should have pattern validators for card number and cvv fields', () => {
    const cardNumber = component.paymentForm.controls['cardNumber'];
    cardNumber.setValue('12345');
    expect(cardNumber.errors['pattern']).toBeTruthy();

    const cvv = component.paymentForm.controls['cvv'];
    cvv.setValue('1234');
    expect(cvv.errors['pattern']).toBeTruthy();
  });
});
