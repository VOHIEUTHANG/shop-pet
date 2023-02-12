import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PartSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  partSection: {
    type: String,
    required: true,
    lowercase: true,
  },
  partKey: {
    type: Number,
    required: true,
    unique: true,
  },
  packages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Package",
    },
  ],
});

const PartModel = mongoose.model("Part", PartSchema);
export default PartModel;
