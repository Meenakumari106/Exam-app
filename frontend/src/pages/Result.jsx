import React from "react";

export default function Result() {
  const result = JSON.parse(localStorage.getItem("result"));

  if (!result) return <p>No result found. Please take an exam first.</p>;

  return (
    <div className="container">
      <h2>Exam Result</h2>
      <p>Total Questions: {result.total}</p>
      <p>Correct Answers: {result.correct}</p>
      <p>Your Score: {result.score}</p>
      <button onClick={() => window.location.href = "/"}>Go Home</button>
    </div>
  );
}
