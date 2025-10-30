import React from "react";
import Header from "../../components/Header/Header";
import RightAside from "../../components/aside/RightAside/RightAside";
import NewsDetailsCard from "../../components/NewsDetailsCard/NewsDetailsCard";


const NewsDetails = () => {

  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 mt-20 gap-10">
        <section className="col-span-9">
          <NewsDetailsCard></NewsDetailsCard>
        </section>

        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
