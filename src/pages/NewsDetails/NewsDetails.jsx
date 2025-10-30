import React from "react";
import Header from "../../components/Header/Header";
import RightAside from "../../components/aside/RightAside/RightAside";
import NewsDetailsCard from "../../components/NewsDetailsCard/NewsDetailsCard";
import { useParams } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  console.log("News ID:", id);

  return (
    <body className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 mt-20">
        <section className="col-span-9">
          <NewsDetailsCard></NewsDetailsCard>
        </section>

        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </body>
  );
};

export default NewsDetails;
