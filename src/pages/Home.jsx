import { Link } from "react-router-dom";
import banner from "../assets/banner.avif";

const Home = () => {

  return (
    <div
      className="container position-relative bg-light"
      style={{ backgroundImage: { banner } }}
    >
      <div className="w-full mt-2 " style={{ width: "100%", height: "88vh" }}>
        <img src={banner} className=" w-100 h-100"style={{borderRadius: "15px"}} />
      </div>

      <div
        className="position-absolute top-50 start-50 text-center "
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <h1 className="text-dark bg-white p-2">
          This is ASOS <br />
          <p className="text-nowrap fs-4 mt-2">ASOS DESIGN and 850+ brands</p>
        </h1>
        <div className="d-flex gap-4 justify-content-center mt-5">
          <button className="btn btn-white px-4 pt-3 fs-6">Shop Women</button>
          <button className="btn btn-white px-4 pt-3 fs-6">Shop Men</button>
        </div>
      </div>
      <div className="position-absolute bottom-0">
        <Link to="/products">
          <button className="btn btn-secondary px-5 py-3 ">Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
