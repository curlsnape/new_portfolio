import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const MainLayout = () => {
     const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
