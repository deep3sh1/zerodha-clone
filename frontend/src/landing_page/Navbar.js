import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 py-md-3 border-bottom sticky-top">
            <div className="container">

                {/* Logo */}
                <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeNav}>
                    <img src='/media/images/logo.svg' style={{ width: "130px", maxWidth: "100%" }} alt='logo' />
                </Link>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNav}
                    aria-controls="navbarNav"
                    aria-expanded={isNavOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav align-items-center mt-3 mt-lg-0 navbar-nav-links">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link" onClick={closeNav}>Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={closeNav}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productpage" className="nav-link" onClick={closeNav}>Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricingpage" className="nav-link" onClick={closeNav}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/supportpage" className="nav-link" onClick={closeNav}>Support</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="nav-link" onClick={closeNav}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

