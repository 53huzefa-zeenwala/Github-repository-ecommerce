import mongoose from "mongoose";

const ColorsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 20,
    },
  },
);

export default mongoose.models.Colors || mongoose.model("Colors", ColorsSchema)