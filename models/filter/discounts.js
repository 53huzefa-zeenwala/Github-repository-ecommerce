import mongoose from "mongoose";

const DiscountsSchema = new mongoose.Schema(
  {
    title: {
      type: Number,
      required: true,
      maxlength: 20,
    },
  },
);

export default mongoose.models.Discounts || mongoose.model("Discounts", DiscountsSchema)