import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import EmptyBasket from "../components/EmptyBasket";
import BuyNow from "../assets/buynow.webp";
import { Link } from "react-router-dom";
import Payment from "../assets/payment.png";
import FreeShip from "../assets/freeShip.gif";

const BasketPage = () => {
  const state = useSelector((store) => store.basketState);
  console.log("basket ", state);

  return (
    <div className="container">
      <div className="row">
         {state.basket.length === 0 && <EmptyBasket />}
        <div className="col-md-9">     
          {state.basket.length > 0 && (
            <table className="table align-middle mb-0 bg-white">
              <thead className="bg-light text-center">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {state.basket.map((item) => (
                  <BasketCard key={item.id} item={item} state={state} />
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="col-md-3 bg-info px-3 h-100 rounded-5 ">
          {state.basket.length > 0 && (
            <div className="d-flex  flex-column align-items-center justify-content-around">
              <div>
                 {state.total <= 300 &&
              <p className=" text-white text-center fs-sm mt-2">
                Your cart must be at least{" "}
                <span className="text-black text-thin">$300 </span> for free
                shipping. <br />
                <span className="text-thin fs-medium">Add another <span  className="text-danger fw-semibold">{state.total - 300} $</span> item to cart for free shipping</span>
              </p>}
              
              {state.total > 300 && <img src={FreeShip} style={{ width: "130px", height: "80px" }} />}
              </div>
             <div className="bg-light text-center rounded-5">
                <h5 className="p-2 text-primary">Total Price: <span className="text-success">${state.total.toFixed(2)}</span></h5>
             </div>
              <div style={{ width: "200px", height: "100px" }}>
                <Link to="/">
                  <img src={BuyNow} className="h-100 w-100" />
                </Link>
              </div>
              <div style={{ width: "220px", height: "130px" }}>
                <img src={Payment} className="h-100 w-100" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
