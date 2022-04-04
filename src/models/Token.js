import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  creatorId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

export default mongoose.models.Token ||
  mongoose.model("Token", TokenSchema, "tokens");
