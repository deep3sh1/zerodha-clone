import React from 'react';

function Education() {
  return (  
    <div className="container mt-4 mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img 
            src="/media/images/education.svg" 
            className="img-fluid" 
            style={{ maxWidth: "85%", height: "auto" }} 
            alt="Education" 
          />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5 mt-0 mt-md-3">
          <h2 className="mb-3 fs-1 fw-semibold">Free and open market education</h2>
          
          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="d-inline-block py-1" style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>
            Varsity <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>

          <p className="mt-4 text-muted" style={{ lineHeight: "1.7" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="d-inline-block py-1" style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>
            TradingQ&A <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;