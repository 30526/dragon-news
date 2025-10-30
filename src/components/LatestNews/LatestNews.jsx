import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex" pauseOnHover={true} speed={50}>
        <p className="font-bold mr-5">This site is creted by <span className="text-secondary">Taibur Rahman Apu</span></p>
        <p className="font-bold mr-5">This site is creted by <span className="text-secondary">Taibur Rahman Apu</span></p>
        <p className="font-bold mr-5">This site is creted by <span className="text-secondary">Taibur Rahman Apu</span></p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
