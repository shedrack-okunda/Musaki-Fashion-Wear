import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface ICart extends Document {
	user: Types.ObjectId;
	product: Types.ObjectId;
	quantity: number;
}

const cartSchema: Schema<ICart> = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		product: {
			type: Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		quantity: { type: Number, default: 1, required: true },
	},
	{ versionKey: false }
);

const Cart: Model<ICart> = mongoose.model<ICart>("Cart", cartSchema);
export default Cart;
