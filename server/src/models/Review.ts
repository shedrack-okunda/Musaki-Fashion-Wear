import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IReview extends Document {
	user: Types.ObjectId;
	product: Types.ObjectId;
	rating: number;
	comment: string;
	createdAt: Date;
}

const reviewSchema: Schema<IReview> = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		product: {
			type: Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		rating: { type: Number, required: true, min: 1, max: 5 },
		comment: { type: String, required: true },
		createdAt: { type: Date, default: Date.now },
	},
	{ versionKey: false }
);

const Review: Model<IReview> = mongoose.model<IReview>("Review", reviewSchema);
export default Review;
