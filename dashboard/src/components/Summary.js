import React from "react";

const Summary = () => {
  // ✅ Get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.username || "Trader"; // fallback to Trader if username is not found

  return (
    <div className="summary-container">
      {/* USER HEADER */}
      <div className="bg-white border rounded-3 p-3 p-md-4 shadow-sm mb-3">
        <h5 className="fw-bold text-dark mb-1">
          Hi, {username} 👋
        </h5>
        <small className="text-muted">Welcome back to your trading dashboard</small>
      </div>

      <div className="row g-3">
        {/* EQUITY SECTION */}
        <div className="col-12 col-md-6">
          <div className="bg-white border rounded-3 p-3 p-md-4 shadow-sm h-100">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-2 py-1 mb-3">Equity</span>

            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
              <div>
                <h3 className="text-primary fw-bold mb-0">₹3.74k</h3>
                <small className="text-muted">Margin available</small>
              </div>

              <div className="text-start text-sm-end">
                <p className="mb-1 text-dark small">
                  Margins used: <span className="fw-semibold">₹0.00</span>
                </p>
                <p className="mb-0 text-dark small">
                  Opening balance: <span className="fw-semibold">₹3.74k</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HOLDINGS SECTION */}
        <div className="col-12 col-md-6">
          <div className="bg-white border rounded-3 p-3 p-md-4 shadow-sm h-100">
            <span className="badge bg-success-subtle text-success fw-semibold px-2 py-1 mb-3">Holdings (13)</span>

            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
              <div>
                <h3 className="fw-bold text-success mb-0">
                  ₹1.55k <small className="fs-6 fw-normal">+5.20%</small>
                </h3>
                <small className="text-muted">Total P&amp;L</small>
              </div>

              <div className="text-start text-sm-end">
                <p className="mb-1 text-dark small">
                  Current Value: <span className="fw-semibold">₹31.43k</span>
                </p>
                <p className="mb-0 text-dark small">
                  Investment: <span className="fw-semibold">₹29.88k</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
