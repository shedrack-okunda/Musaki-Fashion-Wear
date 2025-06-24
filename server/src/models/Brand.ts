import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBrand extends Document {
	title: string;
}

const brandSchema: Schema<IBrand> = new Schema({
	title: { type: String, required: true },
});

const Brand: Model<IBrand> = mongoose.model<IBrand>("Brand", brandSchema);
export default Brand;
