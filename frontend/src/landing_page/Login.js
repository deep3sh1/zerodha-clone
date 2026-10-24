import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://zerodha-backend-q0yx.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier, password }),
        }
      );

      const data = await res.json().catch(() => null);

      if (!data) {
        alert("Server returned an unexpected response.");
        return;
      }

      if (res.ok && data.token) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        window.location.href =
          `https://zerodha-dashboard-kx91.onrender.com?token=${data.token}&username=${data.user.username}`;
      } else {
        alert(data.message || "Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
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

          <div className="col-12 col-md-6 d-none d-md-flex flex-column gap-3 pe-lg-5">
            <h1 className="fw-bold display-6 text-dark">
              Invest in everything
            </h1>

            <p className="text-secondary fs-5" style={{ lineHeight: "1.7" }}>
              Online platform to invest in stocks, derivatives, mutual funds, and more.
            </p>
          </div>

          <div className="col-12 col-sm-10 col-md-6 col-lg-5">
            <div className="card shadow-lg border-0 rounded-4 p-4 p-sm-5 bg-white">

              <div className="text-center mb-4">
                <h2 className="fw-semibold fs-3">Login to Your Account</h2>
                <p className="text-muted small">
                  Start your investment journey
                </p>
              </div>

              <form onSubmit={handleLogin} className="d-flex flex-column gap-3">

                <div>
                  <label className="form-label text-muted small fw-medium mb-1">Username or Email</label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your username or email"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <div>
                  <label className="form-label text-muted small fw-medium mb-1">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg rounded-3"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ fontSize: "16px" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-3 mt-2 w-100 py-2"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

              </form>

              <p className="text-center text-muted small mt-4 mb-0">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary fw-medium text-decoration-none">
                  Sign Up
                </Link>
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
