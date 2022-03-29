import mongoose from "mongoose";

const InsightsSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  instagram: {
    type: Array,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

export default mongoose.models.Insights ||
  mongoose.model("Insights", InsightsSchema, "insights");
