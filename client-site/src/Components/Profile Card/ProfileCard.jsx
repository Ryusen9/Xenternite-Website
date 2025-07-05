import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

const ProfileCard = ({ image, name, role }) => {
  return (
    <div className="h-[55vh] w-[20vw] border border-mainBlue rounded-2xl overflow-hidden flex items-center justify-center relative">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div
        className="h-full w-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-gradient-to-t from-black to-transparent flex flex-col items-center justify-center p-3 w-full absolute bottom-0 left-0">
          <div className="text-white text-center">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm">{role}</p>
          </div>
          {/* socials */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <a
              href=""
              className="bg-black text-white dark:bg-white dark:text-black rounded-full p-2 hover:text-mainBlue duration-200"
            >
              <Facebook />
            </a>
            <a
              href=""
              className="bg-black text-white dark:bg-white dark:text-black rounded-full p-2 hover:text-rose-500 duration-200"
            >
              <Instagram />
            </a>
            <a
              href=""
              className="bg-black text-white dark:bg-white dark:text-black rounded-full p-2 hover:text-red-600 duration-200"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
