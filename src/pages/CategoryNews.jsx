import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Dragon News Home</h2>
      <p className="text-gray-400 text-sm ">
        {news.length} News Found On This Category
      </p>
      <div className="card">
        {news.map((singleNews) => (
          <NewsCard news={singleNews} key={singleNews._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
