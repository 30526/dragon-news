import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <img src={logo} alt="" />
      <p className="mt-3 text-accent">Journalism Without Fear or Favour</p>
      <p className="mt-3 font-semibold text-accent">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
