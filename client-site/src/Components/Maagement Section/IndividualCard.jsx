import React from "react";

const IndividualCard = ({ item }) => {
  const { name, role, description, image } = item;
  return (
    <div
      className="h-[50vh] group w-64 bg-center bg-cover bg-no-repeat rounded-md cursor-pointer relative overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      {/* info */}
      <div className="flex flex-col gap-1 rounded-t-md p-2 bg-white dark:bg-black absolute bottom-0 left-0 transform translate-y-[150%] transition-all z-[3] group-hover:translate-y-0 duration-300 ease-linear">
  <h2 className="text-lg font-bold">{name}</h2>
  <p className="text-sm opacity-45">{role}</p>
  <p className="text-sm">{description}</p>
</div>

    </div>
  );
};

export default IndividualCard;
