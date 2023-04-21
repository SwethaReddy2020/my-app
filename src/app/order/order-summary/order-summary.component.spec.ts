import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OrderSummaryComponent } from './order-summary.component';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderSummaryComponent],
      imports: [MatIconModule, MatButtonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cart items', () => {
    component.cartItems = [
      { name: 'Item 1', price: 10, quantity: 2 },
      { name: 'Item 2', price: 5, quantity: 1 }
    ];
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].querySelector('td').textContent).toContain('Item 1');
    expect(rows[0].querySelector('td:nth-child(2)').textContent).toContain('20.00');
    expect(rows[0].querySelector('td:nth-child(3)').textContent).toContain('2');
    expect(rows[0].querySelector('td:nth-child(4)').textContent).toContain('20.00');
    expect(rows[1].querySelector('td').textContent).toContain('Item 2');
    expect(rows[1].querySelector('td:nth-child(2)').textContent).toContain('5.00');
    expect(rows[1].querySelector('td:nth-child(3)').textContent).toContain('1');
    expect(rows[1].querySelector('td:nth-child(4)').textContent).toContain('5.00');
  });

  it('should display subtotal', () => {
    component.cartItems = [
      { name: 'Item 1', price: 10, quantity: 2 },
      { name: 'Item 2', price: 5, quantity: 1 }
    ];
    fixture.detectChanges();
    const subtotal = fixture.nativeElement.querySelector('tfoot tr:nth-child(1) td:nth-child(2)').textContent;
    expect(subtotal).toContain('30.00');
  });

  it('should display tax', () => {
    component.cartItems = [
      { name: 'Item 1', price: 10, quantity: 2 },
      { name: 'Item 2', price: 5, quantity: 1 }
    ];
    fixture.detectChanges();
    const tax = fixture.nativeElement.querySelector('tfoot tr:nth-child(2) td:nth-child(2)').textContent;
    expect(tax).toContain('2.10');
  });

  it('should display total', () => {
    component.cartItems = [
      { name: 'Item 1', price: 10, quantity: 2 },
      { name: 'Item 2', price: 5, quantity: 1 }
    ];
    fixture.detectChanges();
    const total = fixture.nativeElement.querySelector('tfoot tr:nth-child(3) td:nth-child(2)').textContent;
    expect(total).toContain('32.10');
  });
});
