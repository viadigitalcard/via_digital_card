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
    expires: new Date(Date.now() + 20 * 60 * 1000),
  },
});

export default mongoose.models.Token ||
  mongoose.model("Token", TokenSchema, "tokens");
