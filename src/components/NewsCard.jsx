import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const NewsCard = (props = {}) => {
  const {news} = props || {};
  const { title, author, thumbnail_url, details, rating, total_view } = news;
  console.log(news);
  return (
    <div>
      {" "}
      <div className="bg-white rounded-xl border border-gray-300 p-5 space-y-4">
        {/* Top Section - Author & Icons */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{author.name}</h3>
              <p className="text-gray-500 text-sm">{author.published_date}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-600 text-xl cursor-pointer">
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold leading-snug">{title}</h2>

        {/* Image */}
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full rounded object-cover"
        />

        {/* Details */}
        <p className="text-gray-700 text-sm">
          {details.slice(0, 180)}...
          <br />
          <span className="text-orange-500 font-semibold cursor-pointer">
            {" "}
            Read More
          </span>
        </p>

        {/* Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-300 pt-3">
          {/* Rating */}
          <div className="flex items-center gap-2 text-orange-500">
            <FaStar className="text-lg" />
            <span className="font-semibold">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye className="text-lg" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
