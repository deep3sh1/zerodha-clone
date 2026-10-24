import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return ( 
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 pt-4">
        <div className="row mt-2 mt-md-4">

          {/* Logo Column */}
          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <Link to="/">
              <img src="/media/images/logo.svg" style={{ width: "130px", maxWidth: "100%" }} alt="logo"/>
            </Link>
            <p className="mt-3 text-muted" style={{ fontSize: "13px", lineHeight: "1.6" }}>
              &copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
            <hr />

            {/* Social media icons */}
            <div className="d-flex flex-wrap mt-2" style={{ gap: "15px" }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-secondary p-1" aria-label="Facebook">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-secondary p-1" aria-label="Twitter">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-secondary p-1" aria-label="Instagram">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-secondary p-1" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-secondary p-1" aria-label="YouTube">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Right Columns */}
          <div className="col-6 col-sm-6 col-lg-3 mb-4">
            <p className="fw-semibold text-dark mb-2">Company</p>
            <Link to="/about" className="text-decoration-none text-muted d-block mb-2 py-1">About</Link>
            <Link to="/productpage" className="text-decoration-none text-muted d-block mb-2 py-1">Products</Link>
            <Link to="/pricingpage" className="text-decoration-none text-muted d-block mb-2 py-1">Pricing</Link>
            <a href="#" className="text-decoration-none text-muted d-block mb-2 py-1">Referral programme</a>
            <a href="#" className="text-decoration-none text-muted d-block mb-2 py-1">Careers</a>
            <a href="#" className="text-decoration-none text-muted d-block mb-2 py-1">Zerodha.tech</a>
            <a href="#" className="text-decoration-none text-muted d-block mb-2 py-1">Press & media</a>
            <a href="#" className="text-decoration-none text-muted d-block mb-2 py-1">Zerodha cares (CSR)</a>
          </div>

          <div className="col-6 col-sm-6 col-lg-3 mb-4">
            <p className="fw-semibold text-dark mb-2">Support</p>
            <Link to="/supportpage" className="text-decoration-none text-muted d-block mb-2 py-1">Contact</Link>
            <Link to="/supportpage" className="text-decoration-none text-muted d-block mb-2 py-1">Support portal</Link>
            <a href="#" className="text-decoration-none text-muted d-block mb-2 py-1">Z-Connect blog</a>
            <Link to="/pricingpage" className="text-decoration-none text-muted d-block mb-2 py-1">List of charges</Link>
            <a href="#" className="text-decoration-none text-muted d-block mb-2 py-1">Downloads & resources</a>
          </div>

          <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <p className="fw-semibold text-dark mb-2">Account</p>
            <Link to="/signup" className="text-decoration-none text-muted d-block mb-2 py-1">Open an account</Link>
            <Link to="/Login" className="text-decoration-none text-muted d-block mb-2 py-1">Fund transfer</Link>
            <a href="#" className="text-decoration-none text-muted d-block mb-2 py-1">60 day challenge</a>
          </div>

        </div>

        {/* Legal text */}
        <div className="mt-4 pb-4 text-muted border-top pt-4" style={{ fontSize: "12px", lineHeight: "1.8" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p className="mb-0">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
