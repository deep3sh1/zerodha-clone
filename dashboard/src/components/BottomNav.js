import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChartLine,
  FaClipboardList,
  FaBriefcase,
  FaBolt,
  FaHome,
} from "react-icons/fa";

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { label: "Watchlist", to: "/watchlist", icon: FaChartLine },
    { label: "Summary", to: "/", icon: FaHome, isExact: true },
    { label: "Orders", to: "/orders", icon: FaClipboardList },
    { label: "Holdings", to: "/holdings", icon: FaBriefcase },
    { label: "Positions", to: "/positions", icon: FaBolt },
  ];

  return (
    <nav className="mobile-bottom-nav d-md-none" aria-label="Mobile Navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.isExact
          ? path === "/"
          : path.startsWith(item.to) && (item.to !== "/" || path === "/");

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`bottom-nav-item ${isActive ? "active" : ""}`}
          >
            <Icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
