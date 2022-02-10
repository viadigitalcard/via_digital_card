import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  card_id: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phoneno: {
    type: String,
  },
});

export default mongoose.models.Card ||
  mongoose.model("Card", CardSchema, "digicards");
