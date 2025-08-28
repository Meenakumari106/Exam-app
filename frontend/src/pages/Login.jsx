import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      // window.location.href = "/exam";
      // After successful login
// localStorage.setItem("token", res.data.token);
window.location.href = "/dashboard"; // redirect to dashboard

    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Don’t have an account?{" "}
        <a href="/register" style={{ color: "#3498db" }}>
          Register here
        </a>
      </p>
    </div>
  );
}
