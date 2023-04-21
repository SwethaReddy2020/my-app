export class CartItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity = 0;
  
    constructor(id: number, name: string, price: number, imageUrl: string, quantity: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
      this.quantity = quantity;
    }
  }
  