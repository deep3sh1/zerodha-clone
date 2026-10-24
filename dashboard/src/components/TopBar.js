import React from "react";
import Menu from "./Menu";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <header className="topbar-container">
      {/* Mobile Branding (visible on < 992px) */}
      <div className="topbar-brand-mobile d-flex d-lg-none align-items-center">
        <Link to="/" className="text-decoration-none d-flex align-items-center">
          <FaChartLine size={24} className="text-primary me-2" />
          <span className="fw-bold text-primary fs-5 mb-0">Stocksy</span>
        </Link>
      </div>

      {/* Indices (Desktop: full view; Mobile: compact badges) */}
      <div className="indices-container">
        <div className="index-chip nifty">
          <span className="index-name">NIFTY 50</span>
          <span className="index-points">24,148.20</span>
          <span className="index-change text-success">+0.42%</span>
        </div>
        <div className="index-chip sensex">
          <span className="index-name">SENSEX</span>
          <span className="index-points">79,402.29</span>
          <span className="index-change text-danger">-0.15%</span>
        </div>
      </div>

      {/* Menu & Navigation */}
      <Menu />
    </header>
  );
};

export default TopBar;
