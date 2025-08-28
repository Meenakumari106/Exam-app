import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: String, required: true } // store the correct option text
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
