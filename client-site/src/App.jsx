import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
