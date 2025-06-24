import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IProduct extends Document {
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	category: Types.ObjectId;
	brand: Types.ObjectId;
	stockQuantity: number;
	thumbnail: string;
	images: string[];
	isDeleted: boolean;
	createdAt: Date;
	updatedAt: Date;
}

const productSchema: Schema<IProduct> = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		discountPercentage: { type: Number, default: 0 },
		category: {
			type: Schema.Types.ObjectId,
			ref: "Category",
			required: true,
		},
		brand: { type: Schema.Types.ObjectId, ref: "Brand", required: true },
		stockQuantity: { type: Number, required: true, default: 0 },
		thumbnail: { type: String, required: true },
		images: { type: [String], required: true, default: [] },
		isDeleted: { type: Boolean, default: false },
	},
	{ timestamps: true, versionKey: false }
);

const Product: Model<IProduct> = mongoose.model<IProduct>(
	"Product",
	productSchema
);
export default Product;
