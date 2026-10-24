import React from "react";

function Brockerage() {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row p-3 p-md-5 border-top">

        {/* LEFT COLUMN */}
        <div className="col-12 col-lg-8 p-2 p-md-4">
          <h2 className="fw-semibold fs-3 mb-4 text-center text-lg-start">Brokerage Calculator</h2>

          <ul
            className="text-muted ps-3"
            style={{
              textAlign: "left",
              lineHeight: "2",
              fontSize: "15px",
            }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via email.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-12 col-lg-4 p-2 p-md-4 d-flex align-items-start justify-content-center justify-content-lg-end mt-3 mt-lg-0">
          <a href="#charges" style={{ textDecoration: "none", color: "#1a73e8" }}>
            <h3 className="fw-semibold fs-4">List of Charges <i className="fa fa-long-arrow-right ms-1"></i></h3>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Brockerage;
