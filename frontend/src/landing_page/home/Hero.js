import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='container p-3 p-md-5'>
      <div className='row text-center justify-content-center'>
        <div className='col-12 col-lg-10'>
          <img
            src="/media/images/homeHero.png"
            alt="hero-img"
            className="img-fluid mb-4 mb-md-5 mx-auto d-block"
            style={{ maxHeight: "380px", width: "auto", maxWidth: "100%" }}
          />
          <h1 className='mt-2 mt-md-4 fw-semibold display-6 display-md-5'>Invest in everything</h1>
          <p className='fs-5 text-muted px-2 mx-auto my-3' style={{ maxWidth: "600px", lineHeight: "1.6" }}>
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <Link to="/signup" className="d-inline-block">
            <button
              className='btn btn-primary fs-5 mb-4 mb-md-5 px-4 py-2'
              style={{ minWidth: "200px", maxWidth: "260px" }}
            >
              Sign up now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
