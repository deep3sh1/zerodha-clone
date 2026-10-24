import React from "react";

function Awards() {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img src="/media/images/largestBroker.svg" className="img-fluid" alt="Largest broker" />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5 mt-2 mt-md-0">
          <h2 className="fs-1 fw-semibold mb-3">Largest stock broker in India</h2>
          <p className="mb-4 text-muted" style={{ lineHeight: "1.7" }}>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <ul className="text-muted" style={{ lineHeight: "1.8" }}>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="text-muted" style={{ lineHeight: "1.8" }}>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center text-md-start">
            <img 
              src="/media/images/pressLogos.png" 
              className="img-fluid" 
              style={{ maxWidth: "100%", height: "auto" }} 
              alt="Press logos" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;