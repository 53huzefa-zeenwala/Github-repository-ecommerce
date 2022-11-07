import mongoose from "mongoose";

const ProductCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 20,
    },
  },
);

export default mongoose.models.ProductCategory || mongoose.model("ProductCategory", ProductCategorySchema)