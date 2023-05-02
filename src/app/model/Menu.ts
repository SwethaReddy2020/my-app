import { Category } from "./Category";
import { Item } from "./Item";
import { SellerProfile } from "./SellerProfile";

export class Menu {
      menuId?: string;
      userId?: string;
      itemId?: string;
      availabilityTime?: string;
      status?: string;
      ingredients?: string;
      recipe?: string;
      price?: number;
      quantity?: number;
      sellingType?: string;
      categoryId?: string;
      menuImage?: string;
      item?: Item;
      category?: Category;
      sellerProfile?: SellerProfile;
}