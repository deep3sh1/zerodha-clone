import React from 'react';

function Hero() {
  return ( 
    <div className="container border-bottom mb-4 mb-md-5">
      <div className="text-center mt-4 mt-md-5 p-3">
        <h1 className="fw-semibold fs-1">Technology</h1>
        <h3 className="text-muted mt-2 mt-md-3 fs-4 fs-md-3">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-4 mb-md-5">
          Check out our{" "}
          <a href="#offerings" style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;