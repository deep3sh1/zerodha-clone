import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChartLine,
  FaBars,
  FaTimes,
  FaHome,
  FaClipboardList,
  FaBriefcase,
  FaBolt,
  FaWallet,
  FaThLarge,
  FaSignOutAlt
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      try {
        setUser(JSON.parse(loggedUser));
      } catch (e) {
        setUser({ username: loggedUser });
      }
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  }, [location.pathname]);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    window.location.href = isLocal
      ? "http://localhost:3000"
      : "https://zerodha-frontend-tdlt.onrender.com";
  };

  const currentPath = location.pathname;

  const navLinks = [
    { label: "Dashboard", to: "/", isExact: true, icon: FaHome },
    { label: "Orders", to: "/orders", icon: FaClipboardList },
    { label: "Holdings", to: "/holdings", icon: FaBriefcase },
    { label: "Positions", to: "/positions", icon: FaBolt },
    { label: "Funds", to: "/funds", icon: FaWallet },
    { label: "Apps", to: "/apps", icon: FaThLarge },
  ];

  const isLinkActive = (item) => {
    if (item.isExact) return currentPath === "/";
    return currentPath.startsWith(item.to);
  };

  return (
    <>
      {/* ================= DESKTOP MENU ================= */}
      <div className="menu-container d-none d-lg-flex">
        <div className="logo mb-0 d-flex align-items-center" style={{ cursor: "default" }}>
          <FaChartLine size={30} className="me-2 text-primary" />
          <span className="h5 m-0 text-primary fw-bold">Stocksy</span>
        </div>

        <div className="menus">
          <ul className="list-unstyled m-0 d-flex align-items-center">
            {navLinks.map((item) => {
              const active = isLinkActive(item);
              return (
                <li key={item.to} className="m-0 me-4">
                  <Link
                    to={item.to}
                    className="text-decoration-none"
                  >
                    <p className={`menu m-0 ${active ? "menu selected" : "menu"}`}>
                      {item.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          <hr className="d-inline-block mx-3 my-0" style={{ height: "24px" }} />

          {/* Desktop Profile Dropdown */}
          <div
            className="profile position-relative"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center gap-2">
              <div
                className="avatar rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                style={{ width: "34px", height: "34px", fontSize: "14px", fontWeight: "600" }}
              >
                {user?.username ? user.username[0].toUpperCase() : "U"}
              </div>
              <p className="mb-0 fw-semibold text-dark small">
                {user?.username || "User"}
              </p>
            </div>

            {isProfileDropdownOpen && (
              <div
                className="profile-dropdown position-absolute bg-white shadow rounded-3 p-2"
                style={{
                  top: "130%",
                  right: "0",
                  zIndex: 1050,
                  minWidth: "180px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <div className="px-3 py-2 border-bottom">
                  <span className="text-muted d-block" style={{ fontSize: "11px" }}>Signed in as</span>
                  <strong className="text-dark d-block text-truncate">
                    {user?.username || "User"}
                  </strong>
                </div>
                <button
                  className="btn btn-outline-danger btn-sm w-100 rounded-2 mt-2 d-flex align-items-center justify-content-center gap-2"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= MOBILE CONTROLS IN TOPBAR ================= */}
      <div className="d-flex d-lg-none align-items-center gap-2">
        <button
          className="btn btn-light btn-sm border-0 d-flex align-items-center justify-content-center p-2 rounded-circle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{ width: "38px", height: "38px" }}
        >
          {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

        <div
          className="avatar rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
          style={{ width: "34px", height: "34px", fontSize: "13px", fontWeight: "600", cursor: "pointer" }}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          {user?.username ? user.username[0].toUpperCase() : "U"}
        </div>
      </div>

      {/* ================= MOBILE OFFCANVAS DRAWER ================= */}
      {isMobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="mobile-drawer bg-white shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="d-flex justify-content-between align-items-center pb-3 border-bottom mb-3">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="avatar rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                  style={{ width: "42px", height: "42px", fontSize: "16px", fontWeight: "bold" }}
                >
                  {user?.username ? user.username[0].toUpperCase() : "U"}
                </div>
                <div>
                  <h6 className="mb-0 fw-bold text-dark">{user?.username || "User"}</h6>
                  <small className="text-muted">Trading Account</small>
                </div>
              </div>

              <button
                className="btn btn-close text-reset p-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close"
              ></button>
            </div>

            {/* Quick Watchlist Link on Mobile */}
            <div className="mb-3">
              <Link
                to="/watchlist"
                className={`mobile-nav-link d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none ${
                  currentPath === "/watchlist" ? "active-mobile-link" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaChartLine className="fs-5 text-primary" />
                <span className="fw-semibold">Watchlist (Markets)</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="d-flex flex-column gap-1 mb-4">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const active = isLinkActive(item);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`mobile-nav-link d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none ${
                      active ? "active-mobile-link" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className={`fs-5 ${active ? "text-primary" : "text-secondary"}`} />
                    <span className="fw-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Logout Button */}
            <div className="pt-3 border-top mt-auto">
              <button
                className="btn btn-outline-danger w-100 py-2 rounded-3 d-flex align-items-center justify-content-center gap-2 fw-medium"
                onClick={handleLogout}
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
