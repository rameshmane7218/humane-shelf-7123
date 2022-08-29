import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Slider from "../components/Home/slider";
import Upperfooter from "../components/Upperfooter";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Slider />
      <Upperfooter />
    </div>
  );
};

export default Home;
