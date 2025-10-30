import React from "react";
import Header from "../../components/Header/Header";
import RightAside from "../../components/aside/RightAside/RightAside";
import NewsDetailsCard from "../../components/NewsDetailsCard/NewsDetailsCard";
import { useParams } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  
  return (
    <div className="w-11/12 mx-auto space-y-20">
      <Header></Header>
      <div className="grid grid-cols-12">
        <section className="col-span-9">
          <NewsDetailsCard></NewsDetailsCard>
        </section>

        <section className="col-span-3">
          <RightAside></RightAside>
        </section>
      </div>
    </div>
  );
};

export default NewsDetails;
