import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const SocialButtons = () => {
  return (
    <div>
        <h2 className="text-primary font-bold mb-3">Find Us On</h2>
      <div className="join join-vertical w-full ">
        <button className="btn btn-outline border-accent join-item justify-start text-primary">
          <FaFacebook className="text-blue-500"></FaFacebook> Facebook
        </button>
        <button className="btn btn-outline border-accent join-item justify-start text-primary">
          <FaTwitter ></FaTwitter> Twitter
        </button>
        <button className="btn btn-outline border-accent join-item justify-start text-primary">
          <RiInstagramFill className="text-secondary" size={18}></RiInstagramFill> Instagram
        </button>
      </div>
    </div>
  );
};

export default SocialButtons;
