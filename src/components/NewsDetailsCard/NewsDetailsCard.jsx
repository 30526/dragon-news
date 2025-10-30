import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetailsCard = () => {
  const [news, setNews] = useState([]);
  const newsDetails = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const News = newsDetails.find((getNews) => getNews.id == id);
    setNews(News);
  }, [newsDetails, id]);
  return (
    <div>
      <title>{news?.title?.slice(0, 20)}</title>
      <h2 className="font-bold text-primary text-xl mb-4">Read Details</h2>
      <div className="p-4 border border-gray-200 shadow-xs rounded-lg">
        <img
          className="w-full rounded-md mb-6"
          src={news.image_url}
          alt={news.title}
        />

        <h2 className="text-2xl font-bold text-primary mb-6">{news.title}</h2>
        <p>{news.details}</p>
        <Link to={`/category/${news.category_id}`}>
          {" "}
          <button className="btn btn-secondary border-none shadow-none mt-6 mb-4">
            <FaArrowLeft /> Go Back to the Category
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
