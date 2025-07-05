import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileCard from "../Profile Card/ProfileCard";

const Carousal = () => {
  const [managements, setManagements] = useState([]);
  useEffect(() => {
    axios.get("../../../public/Json/management.json").then((response) => {
      setManagements(response.data);
    });
  }, []);
  console.log(managements);
  return (
    <div className="h-[60vh] w-4xl border-2 mx-auto">
      {managements.map((management, index) => {
        <ProfileCard
          key={index}
          image={management.image}
          name={management.name}
          role={management.role}
        />;
      })}
    </div>
  );
};

export default Carousal;
