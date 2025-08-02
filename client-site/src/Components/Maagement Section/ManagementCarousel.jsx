import axios from "axios";
import React, { useEffect, useState } from "react";
import IndividualCard from "./IndividualCard";

const ManagementCarousel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("../../../public/Json/management.json")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="flex gap-2">
      {data?.map((item, index) => {
        return (
          <div className="" key={index}>
            <IndividualCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ManagementCarousel;
