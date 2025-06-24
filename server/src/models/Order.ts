import mongoose, { Model, Schema, Types } from "mongoose";

interface IOrderItem {
	productId: Types.ObjectId;
	quantity: number;
}

const orderItemSchema = new Schema<IOrderItem>(
	{
		productId: {
			type: Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		quantity: { type: Number, required: true },
	},
	{ _id: false }
);

interface IOrderAddress {
	street: string;
	city: string;
	state: string;
	phoneNumber: string;
	postalCode: string;
	country: string;
	type: string;
}

export interface IOrder extends Document {
	user: Types.ObjectId;
	item: IOrderItem[];
	address: IOrderAddress[];
	status: "pending" | "shipped" | "delivered" | "cancelled";
	paymentMethod: "MPesa" | "Card";
	total: number;
	createdAt: Date;
}

const orderSchema: Schema<IOrder> = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		item: { type: [orderItemSchema], required: true },
		address: { types: [Schema.Types.Mixed], required: true },
		status: {
			type: String,
			enum: ["pending", "shipped", "delivered", "cancelled"],
			default: "pending",
		},
		paymentMethod: {
			type: String,
			enum: ["MPesa", "Card"],
			required: true,
		},
		total: { type: Number, required: true },
		createdAt: { type: Date, default: Date.now },
	},
	{ versionKey: false }
);

const Order: Model<IOrder> = mongoose.model<IOrder>("Order", orderSchema);
export default Order;
