import { Category } from "./Category";
import { Item } from "./Item";

export class Menu {
    menuId?: string;
      userId?: string;
      itemId?: string;
      availabilityTime?: string;
      status?: string;
      ingredients?: string;
      recipe?: string;
      price?: string;
      quantity?: string;
      sellingType?: string;
      categoryId?: string;
      menuImage?: string;
      item?: Item;
      category?: Category;
}