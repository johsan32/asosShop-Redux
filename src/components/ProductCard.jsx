import { useDispatch } from "react-redux";
import { addToBasket, addToFavorite } from "../redux/actions/productActions";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const ProductCard = ({ item, favorite }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const state = useSelector((store) => store.favoriteState);
  console.log(state);

  const handleClick = () => {
    dispatch(addToBasket(item));
  };

  const handleFavorite = () => {
    dispatch(addToFavorite(item));
  };

  return (
    <div className="col">
      <div className="card  shadow-4-strong">
        <div
          className="card-img position-relative"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={`https://${
              isHovered
                ? item.additionalImageUrls[0]
                : item.additionalImageUrls[1]
            }`}
            className="card-img-top img-fluid p-1"
            style={{ borderRadius: "10px" }}
          />

          <div
            className={`position-absolute bottom-0 end-0 btn border-none ${
              state.favorite.some((favori) => favori.id === item.id)
                ? "text-success fs-1"
                : "text-white fs-3"
            }`}
            onClick={handleFavorite}
            style={{ transform: "translate(0%, 0%)" }}
          >
            <AiFillHeart />
          </div>
        </div>
        <div className="card-body px-2" style={{ padding: "5px 10px" }}>
          <h6
            className="card-title text-center mb-2"
            style={{ height: "40px" }}
          >
            {item.name}
          </h6>
          <div
            className="d-flex align-items-center justify-content-around mt-2 px-2"
            style={{ height: "50px" }}
          >
            <p className="card-text">
              <span className="text-info d-inline-block d-lg-none">
                {" "}
                Brand:
              </span>{" "}
              {item.brandName}
            </p>
            <p className="card-text text-warning fs-4 d-none d-lg-block">
              <span className=""></span> {item.price.current.text}
            </p>
            <p className="text-capitalize">
              <span className="text-info d-inline-block d-lg-none">
                {" "}
                Color:{" "}
              </span>
              {item.colour.toLowerCase()}
            </p>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-around btn-group-lg">
          <button
            onClick={handleClick}
            className="btn btn-outline-success py-2 px-2 hover-overlay "
          >
            Add to Basket
          </button>
          <p className="card-text text-warning fs-4 d-inline-block d-lg-none">
            <span className=""></span> {item.price.current.text}
          </p>
          <button className="btn btn-outline-info py-2 px-2 ">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
