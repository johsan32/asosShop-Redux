import Empty from "../assets/empty2.gif";
import { Link } from "react-router-dom";
const EmptyBasket = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <p className="fs-5 fw-bold">There are no items in the basket...</p>
      <Link to="/products">
      <img src={Empty} alt="" className="color-info"/>
      </Link>
      
    </div>
  )
}

export default EmptyBasket
