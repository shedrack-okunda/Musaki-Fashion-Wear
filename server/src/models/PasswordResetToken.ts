import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IPasswordResetToken extends Document {
	user: Types.ObjectId;
	token: string;
	expiresAt: Date;
}

const passwordResetTokenSchema: Schema<IPasswordResetToken> = new Schema({
	user: { type: Schema.Types.ObjectId, ref: "User", required: true },
	token: { type: String, required: true },
	expiresAt: { type: Date, required: true },
});

const PasswordResetToken: Model<IPasswordResetToken> =
	mongoose.model<IPasswordResetToken>(
		"PasswordResetToken",
		passwordResetTokenSchema
	);
export default PasswordResetToken;
