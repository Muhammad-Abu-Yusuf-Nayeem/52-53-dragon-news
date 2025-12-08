import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data.news_category);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);
  return (
    <div>
      <h2 className="font-semibold">All Category: {categories.length}</h2>
      <div className="mt-4 flex flex-col gap-2 ">
        {categories.map((category) => (
          <button key={category.category_id} className=" btn  btn-accent">
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
