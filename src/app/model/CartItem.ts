export class CartItem {
    menuId: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity = 0;
  
    constructor(menuId: string, name: string, price: number, imageUrl: string, quantity: number) {
      this.menuId = menuId;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
      this.quantity = quantity;
    }
}