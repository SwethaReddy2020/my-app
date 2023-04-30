import { Item } from "./Item";

export class OrderDetails {

	  menuId?: string;

	  quantity?: number;

	  subTotal? : number;

	  item?: Item;

	  constructor(menuId?: string, quantity?: number, subTotal? : number ) {
		this.menuId = menuId;
		this.quantity = quantity;
		this.subTotal = subTotal;
	  }

}