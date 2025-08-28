import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExamInstructions() {
  const navigate = useNavigate();

  const handleBegin = () => {
    navigate("/exam");
  };

  return (
    <div className="instructions-container">
      <h2>Exam Instructions</h2>
      <ul>
        <li>Read each question carefully.</li>
        <li>You cannot go back after submitting a question.</li>
        <li>Time is limited to 30 minutes.</li>
        <li>Click 'Begin Exam' to start the timer.</li>
      </ul>
      <button onClick={handleBegin}>Begin Exam</button>
    </div>
  );
}
