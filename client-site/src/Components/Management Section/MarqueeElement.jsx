import React from "react";
import Carousel from "../Shared/Carousel";
import ProfileCard from "../Profile Card/ProfileCard";

const ManagementSection = () => {
  return (
    <div className="mt-10">
      <p className="uppercase text-center font-zenDots text-3xl font-semibold md:text-5xl text-wrap">
        meet our managements
      </p>
      <p className="text-center text-xs md:text-base w-[70%] mx-auto font-quicksand">
        Our management team is dedicated to ensuring the smooth operation of
        Xenternite. They work tirelessly behind the scenes to make sure
        everything runs smoothly.
      </p>
      <div className="mt-3 flex items-center justify-center">
        <Carousel />
        <ProfileCard />
      </div>
    </div>
  );
};

export default ManagementSection;
