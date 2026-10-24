import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container my-4 my-md-5">
      <div className="row align-items-center">

        {/* LEFT SIDE */}
        <div className="col-12 col-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
          <h2 className="mb-3 fs-1 fw-semibold">Unbeatable pricing</h2>

          <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "16px" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <Link
            to="/pricingpage"
            style={{
              textDecoration: "none",
              color: "#1a73e8",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            See pricing <i className="fa-solid fa-arrow-right-long ms-1"></i>
          </Link>
        </div>

        {/* RIGHT SIDE – 3 Badges */}
        <div className="col-12 col-lg-7 mt-3 mt-lg-0">
          <div className="row g-2 g-md-3 justify-content-center justify-content-lg-end text-center">

            {/* CARD 1 */}
            <div className="col-4 col-sm-3 border rounded-3 p-2 p-md-3 mx-1 bg-white shadow-sm">
              <h2 className="fw-bold mb-1" style={{ color: "#ff9800", fontSize: "2rem" }}>₹0</h2>
              <p className="text-muted mb-0" style={{ fontSize: "12px", lineHeight: "1.3" }}>
                Free account<br />opening
              </p>
            </div>

            {/* CARD 2 */}
            <div className="col-4 col-sm-4 border rounded-3 p-2 p-md-3 mx-1 bg-white shadow-sm">
              <h2 className="fw-bold mb-1" style={{ color: "#ff9800", fontSize: "2rem" }}>₹0</h2>
              <p className="text-muted mb-0" style={{ fontSize: "12px", lineHeight: "1.3" }}>
                Free equity delivery<br />& mutual funds
              </p>
            </div>

            {/* CARD 3 */}
            <div className="col-3 col-sm-3 border rounded-3 p-2 p-md-3 mx-1 bg-white shadow-sm">
              <h2 className="fw-bold mb-1" style={{ color: "#ff9800", fontSize: "2rem" }}>₹20</h2>
              <p className="text-muted mb-0" style={{ fontSize: "12px", lineHeight: "1.3" }}>
                Intraday<br />and F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
