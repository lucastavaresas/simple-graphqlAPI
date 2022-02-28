import mongoose, { Schema } from "mongoose";

interface User {
  email: String;
  name: String;
}

const UserSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: false },
});

export const UserModel = mongoose.model<User>("User", UserSchema);
