import mongoose from "mongoose";
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  key: {
    type: String,
    trim: true,
  },
  value: {
    type: String,
    required: true,
    trim: true,
  },
  result: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const answerSheet = new Schema({
  question: String,
  answerList: [answerSchema],
});

const QuestionSchema = new Schema({
  photo: {
    type: String,
  },
  audio: {
    type: String,
  },
  userAnswerStatus: Boolean,
  answerSheetList: [answerSheet],
});

export default mongoose.model("Question", QuestionSchema);
