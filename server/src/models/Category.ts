import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICategory extends Document {
	title: string;
}

const categorySchema: Schema<ICategory> = new Schema({
	title: { type: String, required: true },
});

const Category: Model<ICategory> = mongoose.model<ICategory>(
	"Category",
	categorySchema
);
export default Category;
