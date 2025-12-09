import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-gray-200 p-2 mb-2">
      <p className="bg-[#d72050] text-base-100 px-3  py-1"> Latest</p>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <Link to="/news" className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          aliquid voluptates accusantium, non, repudiandae aspernatur atque
          maiores tempore illo blanditiis, deleniti cum accusamus explicabo
          quas? Maiores quibusdam est illum enim.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
