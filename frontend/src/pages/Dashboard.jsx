import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleStartExam = () => {
    navigate("/instructions");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Exam Portal</h1>
      <div className="exam-info">
        <p>Exam: React JS Assessment</p>
        <p>Duration: 30 minutes</p>
      </div>
      <button onClick={handleStartExam}>Start Exam</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
