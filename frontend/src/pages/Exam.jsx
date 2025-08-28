
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Exam() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes

  // Fetch questions
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/exam/questions`, {
//   headers: { Authorization: `Bearer ${token}` },
// });
// setQuestions(res.data.questions);


       
//       } catch (err) {
//         alert("Failed to load exam questions");
//       }
//     };
//     fetchQuestions();
//   }, []);
useEffect(() => {
  const fetchQuestions = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/exam/questions`);
      console.log("Response:", res.data); // debug
      setQuestions(res.data); // should be an array
    } catch (err) {
      console.error(err);
      alert("Failed to load exam questions");
    }
  };
  fetchQuestions();
}, []);

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/exam/submit`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.setItem("result", JSON.stringify(res.data));
      window.location.href = "/result";
    } catch (err) {
      alert("Failed to submit exam");
    }
  };

  if (!questions.length) return <p className="container">Loading questions...</p>;

  const q = questions[current];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="container exam-container">
      {/* Timer */}
      <div className="timer">
        ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
      </div>

      {/* Question */}
      <h3>
        Q{current + 1}. {q.text}
        
      </h3>
      <ul className="options">
        {q.options.map((opt, i) => (
          <li key={i}>
            <label>
              <input
                type="radio"
                name={`q-${q._id}`}
                value={opt}
                checked={answers[q._id] === opt}
                onChange={() => handleAnswer(q._id, opt)}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>

      {/* Navigation buttons */}
      <div className="nav-buttons">
        <button disabled={current === 0} onClick={() => setCurrent(current - 1)}>
          ⬅ Prev
        </button>
        {current < questions.length - 1 ? (
          <button onClick={() => setCurrent(current + 1)}>Next ➡</button>
        ) : (
          <button className="submit-btn" onClick={handleSubmit}>
            Submit Exam ✅
          </button>
        )}
      </div>
    </div>
  );
}
