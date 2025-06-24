import mongoose, { Document, Model, Schema } from "mongoose";

// Define the IUser interface to represent the user document structure
export interface IUser extends Document {
	name: string;
	username: string;
	email: string;
	phoneNumber: string;
	password: string;
	isVerified: boolean;
	isAdmin: boolean;
	createdAt: Date;
	updatedAt: Date;
}

// Create a Mongoose schema for the user model
const userSchema: Schema<IUser> = new Schema(
	{
		name: { type: String, required: true },
		username: { type: String, required: true, unique: true },
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		phoneNumber: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isVerified: { type: Boolean, default: false },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
export default User;
