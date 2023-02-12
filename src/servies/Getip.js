import React, { useEffect, useState } from "react";
import axios from "axios";

const Getip = () => {
  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com");
    return res;
  };

  useEffect(() => {
    const data = async () => {
      const ip1 = await getData();
      return setIP(ip1);
    };
    data();
  }, []);

  return <div>{console.log({ ip })}</div>;
};

export default Getip;
