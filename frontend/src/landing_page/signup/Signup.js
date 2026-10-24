import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    const localEndpoint = "/api/auth/signup";
    const remoteEndpoint = "https://zerodha-backend-q0yx.onrender.com/api/auth/signup";

    try {
      let res;
      let data = null;

      // Try local proxy endpoint first on localhost to avoid CORS, else remote
      const primaryUrl = isLocal ? localEndpoint : remoteEndpoint;
      try {
        res = await fetch(primaryUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });
        data = await res.json().catch(() => null);
      } catch (firstErr) {
        if (isLocal) {
          res = await fetch(remoteEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
          });
          data = await res.json().catch(() => null);
        } else {
          throw firstErr;
        }
      }

      if (!data) {
        alert("Server returned an unexpected response.");
        return;
      }

      if (res && res.ok && data.token) {
        alert("Signup successful!");

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to local dashboard (port 3001) if running locally, otherwise Render dashboard
        const dashboardUrl = isLocal
          ? `http://localhost:3001?token=${data.token}&username=${encodeURIComponent(data.user?.username || username)}`
          : `https://zerodha-dashboard-kx91.onrender.com?token=${data.token}&username=${encodeURIComponent(data.user?.username || username)}`;

        window.location.href = dashboardUrl;
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("An error occurred during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-5 px-3"
      style={{ background: "linear-gradient(to bottom right, #f0f7ff, #ffffff)" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center g-4 g-lg-5">

          {/* Left Info Section */}
          <div className="col-12 col-md-6 d-none d-md-flex flex-column gap-3 pe-lg-5">
            <h1 className="fw-bold display-6 text-dark">
              Invest in everything
            </h1>

            <p className="text-secondary fs-5" style={{ lineHeight: "1.7" }}>
              Online platform to invest in stocks, derivatives, mutual funds, and more.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-2">
              <span className="badge rounded-pill bg-info-subtle text-info px-3 py-2 fs-6">
                Simple
              </span>
              <span className="badge rounded-pill bg-info-subtle text-info px-3 py-2 fs-6">
                Secure
              </span>
              <span className="badge rounded-pill bg-info-subtle text-info px-3 py-2 fs-6">
                Fast
              </span>
            </div>
          </div>

          {/* Signup Card */}
          <div className="col-12 col-sm-10 col-md-6 col-lg-5">
            <div className="card shadow-lg border-0 rounded-4 p-4 p-sm-5 bg-white">

              <div className="text-center mb-4">
                <h2 className="fw-semibold fs-3">Create your account</h2>
                <p className="text-muted small">
                  Start your investment journey today
                </p>
              </div>

              <form className="d-flex flex-column gap-3" onSubmit={handleSignup}>

                <div>
                  <label className="form-label text-muted small fw-medium mb-1">Full Name / Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="form-control form-control-lg rounded-3"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <div>
                  <label className="form-label text-muted small fw-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="form-control form-control-lg rounded-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <div>
                  <label className="form-label text-muted small fw-medium mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="form-control form-control-lg rounded-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <div>
                  <label className="form-label text-muted small fw-medium mb-1">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="form-control form-control-lg rounded-3"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-3 mt-2 w-100 py-2"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Sign Up"}
                </button>

              </form>

              <p className="text-center text-muted small mt-4 mb-0">
                Already have an account?{" "}
                <Link to="/Login" className="text-primary fw-medium text-decoration-none">
                  Login
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
