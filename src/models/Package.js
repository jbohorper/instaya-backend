import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    weight: {
      type: Number,
      default: 0,
    },
    dimensions: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Package", packageSchema);