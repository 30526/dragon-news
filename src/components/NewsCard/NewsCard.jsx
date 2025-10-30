import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="rounded-md w-full bg-base-100 shadow-xs border border-gray-100 overflow-hidden ">
      {/* Author Info */}
      <div className="flex items-center bg-base-200 justify-between p-4 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800 text-sm">
              {author.name}
            </h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 ">
          <FaRegBookmark className="text-gray-400 cursor-pointer hover:text-primary transition" />
          <FaShareAlt className="text-gray-400 cursor-pointer hover:text-primary transition" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-lg font-semibold text-gray-800 leading-snug">
        {title}
      </h2>

      {/* Image */}
      <figure className="px-4 mt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-gray-600 text-sm leading-relaxed">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/news/${id}`}
              className="text-[#f1730c] font-medium ml-1 hover:underline"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>
      <div className="border opacity-10 mx-4 mb-2"></div>
      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`text-yellow-500 text-4xl ${
                i < rating.number ? "opacity-100" : "opacity-40"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-sm text-gray-600 ml-1 font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
