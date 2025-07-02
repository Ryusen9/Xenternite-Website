import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero/Hero";
import MarqueeElement from "../Components/Marquee/MarqueeElement";

const HomeLayout = () => {
  return (
    <>
      <Helmet>
        <title>XENTERNITE | Home</title>
      </Helmet>
      <div>
        <div>
          <Hero />
        </div>
        <div>
          <MarqueeElement />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
