import React from "react";
import Marquee from "react-fast-marquee";
import xenLogo from "../../../public/assets/XEN_logo.png";
import techDiversityLogo from "../../../public/assets/tech-diversity-ltd-site-logo.png";
import robiLogo from '../../../public/assets/514faa6491556197fe849822b794f881.png';

const MarqueeElement = () => {
  const sponsors = [xenLogo, techDiversityLogo, robiLogo];
  const indexes = [1];
  return (
    <div className="w-full relative">
      {/* Left overlay */}
      <div className="absolute top-0 left-0 w-[20%] h-full bg-gradient-to-r from-white dark:from-black to-transparent z-2"></div>
      {/* Right overlay */}
      <div className="absolute top-0 right-0 w-[20%] h-full bg-gradient-to-l from-white dark:from-black to-transparent z-2"></div>
      {/* Marquee Title */}
      <p className="pt-5 uppercase text-center font-zenDots font-semibold text-5xl">
        SPONSORS
      </p>
      <p className="text-center text-base w-full font-quicksand ">
        Our sponsors make it possible for us to host events and provide
        resources for the community. We are grateful for their support!
      </p>
      {/* Marquee Track */}
      <div className="mt-3">
        <Marquee autoFill={true} pauseOnClick={true} speed={60}>
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor}
              alt={`Sponsor ${index}`}
              className={`w-[100px] h-[100px] object-contain mx-4 ${indexes.includes(index) ? "dark:invert" : ''}`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeElement;
