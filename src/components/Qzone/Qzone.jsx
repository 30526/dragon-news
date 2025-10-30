import React from "react";
import swimming from "../../assets/swimming.png";
import classroom from "../../assets/class.png";
import playground from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="space-y-5 bg-base-200 p-4 rounded-md">
      <h2 className="font-bold">Q-Zone</h2>
      <img src={swimming} alt="" />
      <img src={classroom} alt="" />
      <img src={playground} alt="" />
    </div>
  );
};

export default Qzone;
