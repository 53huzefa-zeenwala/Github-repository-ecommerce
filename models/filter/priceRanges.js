import mongoose from "mongoose";

const PriceRangesSchema = new mongoose.Schema(
  {
    lowerLimit: {
      type: Number,
      maxlength: 20,
    },
    upperLimit: {
      type: Number,
      maxlength: 20,
    },
  },
);

export default mongoose.models.PriceRanges || mongoose.model("PriceRanges", PriceRangesSchema)