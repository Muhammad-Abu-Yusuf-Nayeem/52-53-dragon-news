import swimmingImg from "../assets/swimming.png";
import classroom from "../assets/class.png";
import playground from "../assets/playground.png";

const Q_Zone = () => {
  return (
    <div className="bg-gray-300 px-2 mt-5 rounded space-y-5 pt-5">
      <h2 className="card-title">Q-Zone</h2>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={swimmingImg} alt="Shoes" />
        </figure>
        <div className="text-center mx-auto my-3">
          {/* <h2 className="card-title ">Card Title</h2> */}
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={classroom} alt="Shoes" />
        </figure>
        <div className="text-center mx-auto my-3">
          {/* <h2 className="card-title ">Card Title</h2> */}
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={playground} alt="Shoes" />
        </figure>
        <div className="text-center mx-auto my-3">
          {/* <h2 className="card-title ">Card Title</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Q_Zone;
