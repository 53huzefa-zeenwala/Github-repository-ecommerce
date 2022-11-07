import mongoose from "mongoose";

const FrameTypesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 20,
    },
  },
);

export default mongoose.models.FrameTypes || mongoose.model("FrameTypes", FrameTypesSchema)