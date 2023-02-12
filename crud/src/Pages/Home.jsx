import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Second from "../components/second";
import Slider from "../components/Slider";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Second />
      <Footer />
    </div>
  );
};
