import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/examdb";

const questions = [
  {
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    text: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    text: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Style Syntax",
      "Control Style Sheet",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    text: "What year was JavaScript launched?",
    options: ["1995", "1996", "1994", "1997"],
    answer: "1995",
  },
  {
    text: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook",
  },
];

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected ✅");

    await Question.deleteMany({});
    await Question.insertMany(questions);

    console.log("Questions seeded successfully 🎉");
    process.exit();
  } catch (err) {
    console.error("Error seeding database ❌", err);
    process.exit(1);
  }
}

seedDB();
