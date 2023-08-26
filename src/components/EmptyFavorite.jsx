import Favorite from "../assets/favorite.gif";
import { Link } from "react-router-dom";


const EmptyFavorite = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-3">
      <p className="fs-5 fw-bold">There are no items in favorites...</p>
      <Link to="/products">
      <img src={Favorite} alt="" className="text-info bg-body-tertiary"/>
      </Link>
      
    </div>
  )
}

export default EmptyFavorite;
