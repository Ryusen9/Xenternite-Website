import React from "react";
import HeroBg from "../../../public/assets/web image.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center overflow-hidden justify-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${HeroBg})` }}
    ></div>
  );
};

export default Hero;
