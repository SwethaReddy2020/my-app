import { OrderDetails } from "./orderDetail";

export class OrderSummaryDetail{
    id?: string;
	date?: Date;
	 sellerName?: string;
	 address?: string;
	 city?: string;
	 state?: string;
	 zip?: string;
	 paymentStatus?: string;
	 orderStatus?: string;
	 total?: number;
	 comment?: string;
	 rating?: string;
	 orderItems?: OrderDetails[];
}