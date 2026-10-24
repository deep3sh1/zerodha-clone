import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
  return (
    <div className="container py-4 py-md-5 my-3 my-md-5">
      <div className="row justify-content-center text-center">
        <div className="col-11 col-sm-10 col-md-8 col-lg-6">
          <h2 className="fw-semibold mb-3 fs-1">
            Open a Zerodha account
          </h2>

          <p className="mb-4 text-muted" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            Modern platforms and apps, ₹0 account opening, and flat ₹20 intraday and F&O trades.
          </p>

          <Link to="/signup" className="d-inline-block w-100">
            <button 
              className="btn btn-primary btn-lg px-4 py-2" 
              style={{ maxWidth: "260px", width: "100%" }}
            >
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
