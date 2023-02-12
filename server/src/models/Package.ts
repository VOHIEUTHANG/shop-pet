import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
  partKey: {
    type: Number,
    required: true,
  },
  packageNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Question",
    },
  ],
});

const PackageModel = mongoose.model("Package", PackageSchema);

export default PackageModel;
