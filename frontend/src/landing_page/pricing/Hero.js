import React from 'react';

function Hero() {
  return ( 
    <div className="container">
      <div className="row p-3 p-md-5 mt-2 mt-md-4 border-bottom text-center">
        <h1 className="fw-semibold fs-1">Pricing</h1>
        <h3 className="text-muted mt-2 mt-md-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>
      <div className="row p-2 p-md-5 mt-2 mt-md-3 text-center g-3 g-md-4">
        <div className="col-12 col-md-4 p-3 mb-3 mb-md-0">
          <img src="/media/images/pricingEquity.svg" className="img-fluid mb-3" style={{ maxHeight: "150px" }} alt="Free equity" />
          <h2 className="fs-3 fw-semibold">Free equity delivery</h2>
          <p className="text-muted mt-2" style={{ lineHeight: "1.7", fontSize: "15px" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mb-3 mb-md-0">
          <img src="/media/images/intradayTrades.svg" className="img-fluid mb-3" style={{ maxHeight: "150px" }} alt="Intraday trades" />
          <h2 className="fs-3 fw-semibold">Intraday and F&O trades</h2>
          <p className="text-muted mt-2" style={{ lineHeight: "1.7", fontSize: "15px" }}>
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mb-3 mb-md-0">
          <img src="/media/images/pricingEquity.svg" className="img-fluid mb-3" style={{ maxHeight: "150px" }} alt="Free MF" />
          <h2 className="fs-3 fw-semibold">Free direct MF</h2>
          <p className="text-muted mt-2" style={{ lineHeight: "1.7", fontSize: "15px" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;