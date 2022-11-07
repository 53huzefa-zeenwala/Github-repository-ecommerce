import mongoose from "mongoose";

const BrandsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 20,
    },
  },
);

export default mongoose.models.Brands || mongoose.model("Brands", BrandsSchema)