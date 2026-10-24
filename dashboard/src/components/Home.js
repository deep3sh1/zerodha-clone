import React, { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const username = params.get("username");

    if (token && username) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ username }));
      window.history.replaceState({}, document.title, "/");
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;



