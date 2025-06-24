import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IAdress extends Document {
	user: Types.ObjectId;
	street: string;
	city: string;
	state: string;
	postalCode: string;
	country: string;
	type: string;
}

const addressSchema: Schema<IAdress> = new Schema({
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	street: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	postalCode: { type: String, required: true },
	country: { type: String, required: true },
	type: { type: String, required: true },
});

const Address: Model<IAdress> = mongoose.model<IAdress>(
	"Address",
	addressSchema
);
export default Address;
