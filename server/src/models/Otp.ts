import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IOtp extends Document {
	user: Types.ObjectId;
	otp: string;
	expiresAt: Date;
	createdAt: Date;
	updatedAt: Date;
}

const otpSchema: Schema<IOtp> = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		otp: { type: String, required: true },
		expiresAt: { type: Date, required: true },
	},
	{ timestamps: true }
);

const Otp: Model<IOtp> = mongoose.model<IOtp>("Otp", otpSchema);
export default Otp;
