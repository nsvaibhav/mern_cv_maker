import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  username: { type: String, unique: true },
  email: { type: String, required: true },
  contact: { type: String },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);