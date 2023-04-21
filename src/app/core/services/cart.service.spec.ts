import { CartItem } from '../../../models/cart-item.model';

describe('CartItem', () => {
  it('should create an instance', () => {
    expect(new CartItem(1, 'Test Product', 9.99, 'http://example.com/image.jpg', 1)).toBeTruthy();
  });

  it('should set the properties correctly', () => {
    const item: CartItem = new CartItem(1, 'Test Product', 9.99, 'http://example.com/image.jpg', 1);
    expect(item.id).toBe(1);
    expect(item.name).toBe('Test Product');
    expect(item.price).toBe(9.99);
    expect(item.imageUrl).toBe('http://example.com/image.jpg');
    expect(item.quantity).toBe(1);
  });

  it('should increment the quantity', () => {
    const item: CartItem = new CartItem(1, 'Test Product', 9.99, 'http://example.com/image.jpg', 1);
    item.quantity++;
    expect(item.quantity).toBe(2);
  });

  it('should decrement the quantity', () => {
    const item: CartItem = new CartItem(1, 'Test Product', 9.99, 'http://example.com/image.jpg', 2);
    item.quantity--;
    expect(item.quantity).toBe(1);
  });

  it('should not decrement the quantity below zero', () => {
    const item: CartItem = new CartItem(1, 'Test Product', 9.99, 'http://example.com/image.jpg', 0);
    item.quantity--;
    expect(item.quantity).toBe(0);
  });
});
