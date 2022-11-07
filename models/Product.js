import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
      maxlength: 200,
    },
    price: {
      type: Number,
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    frameType: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    productDetail: {
      type: [
        {
          name: { type: String, required: true },
          detail: { type: String, required: true },
        },
      ],
    },
    images: {
      type: [String],
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)