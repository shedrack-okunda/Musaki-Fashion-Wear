import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IWishlist extends Document {
	user: Types.ObjectId;
	product: Types.ObjectId;
	note?: string;
	createdAt: Date;
	updatedAt: Date;
}

const wishlistSchema: Schema<IWishlist> = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		product: {
			type: Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		note: { type: String, default: "" },
	},
	{ timestamps: true, versionKey: false }
);

const Wishlist: Model<IWishlist> = mongoose.model<IWishlist>(
	"Wishlist",
	wishlistSchema
);
export default Wishlist;
