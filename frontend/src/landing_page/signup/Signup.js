import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("https://zerodha-backend-q0yx.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        alert("Signup successful!");

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        window.location.href = `https://zerodha-dashboard-kx91.onrender.com?token=${data.token}&username=${data.user.username}`;
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center px-3"
      style={{ background: "linear-gradient(to bottom right, #e0f2fe, #ffffff)" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center g-5">

          {/* Left Info Section */}
          <div className="col-md-6 d-none d-md-flex flex-column gap-3">
            <h1 className="fw-bold display-6 text-dark">
              Invest in everything
            </h1>

            <p className="text-secondary fs-5">
              Online platform to invest in stocks, derivatives, mutual funds, and more.
            </p>

            <div className="d-flex gap-3">
              <span className="badge rounded-pill bg-info-subtle text-info px-3 py-2">
                Simple
              </span>
              <span className="badge rounded-pill bg-info-subtle text-info px-3 py-2">
                Secure
              </span>
              <span className="badge rounded-pill bg-info-subtle text-info px-3 py-2">
                Fast
              </span>
            </div>
          </div>

          {/* Signup Card */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-4 p-4">

              <div className="text-center mb-4">
                <h2 className="fw-semibold">Create your account</h2>
                <p className="text-muted small">
                  Start your investment journey today
                </p>
              </div>

              <form className="d-flex flex-column gap-3" onSubmit={handleSignup}>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control form-control-lg rounded-3"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control form-control-lg rounded-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="form-control form-control-lg rounded-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control form-control-lg rounded-3"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-3 mt-2"
                >
                  Sign Up
                </button>

              </form>

              <p className="text-center text-muted small mt-3">
                Already have an account?{" "}
                <span
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/Login")}
                >
                  Login
                </span>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
