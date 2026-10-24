import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import BottomNav from "./BottomNav";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const location = useLocation();
  const isWatchlist = location.pathname === "/watchlist";

  return (
    <GeneralContextProvider>
      <div className="dashboard-container">
        {/* Watchlist Section:
            - Desktop: Always pinned as left sidebar (360px).
            - Mobile: Visible when on /watchlist.
        */}
        <aside
          className={`watchlist-wrapper ${
            isWatchlist ? "d-block" : "d-none d-lg-block"
          }`}
        >
          <WatchList />
        </aside>

        {/* Content Section:
            - Desktop: Always visible on right (flex: 1).
            - Mobile: Visible on all routes except when explicitly on /watchlist.
        */}
        <main
          className={`content ${
            isWatchlist ? "d-none d-lg-block" : "d-block"
          }`}
        >
          <Routes>
            <Route index element={<Summary />} />
            <Route path="watchlist" element={<WatchList />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<Funds />} />
            <Route path="apps" element={<Apps />} />
          </Routes>
        </main>
      </div>

      {/* Mobile Sticky Bottom Navigation (< 768px) */}
      <BottomNav />
    </GeneralContextProvider>
  );
};

export default Dashboard;
