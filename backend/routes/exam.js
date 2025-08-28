import express from "express";
import Question from "../models/Question.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Fetch questions
// router.get("/questions", authMiddleware, async (req, res) => {
//   try {
//     const questions = await Question.find();
//     res.json(questions);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to load questions" });
//   }
// });

router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: "Failed to load questions" });
  }
});

// Submit exam
router.post("/submit", authMiddleware, async (req, res) => {
  try {
    // basic demo: calculate score
    const { answers } = req.body;
    let score = 0;

    const questions = await Question.find();
    questions.forEach((q) => {
      if (answers[q._id] === q.answer) score++;
    });

    res.json({ score, total: questions.length });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit exam" });
  }
});

export default router;
