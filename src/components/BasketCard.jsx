import React from "react";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { minusAmount, plusAmount } from "../redux/actions/productActions";

const BasketCard = ({ item, state }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: item.id,
    });
  };

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={`http://${item.imageUrl}`}
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3 w-75">
            <p className="fw-thin mb-1 text-wrap text-center ">{item.name}</p>
            <div className="d-flex align-items-center justify-content-around">
              <p className="text-muted mb-0">Brand: {item.brandName}</p>
              <p className="text-capitalize text-muted mb-0">
                Color: {item.colour.toLowerCase()}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <p className="fw-medium fs-6 text-info mb-0">
            $ {item.price.current.value * item.amount}
          </p>
        </div>
      </td>
      <td>
        <div className="d-flex gap-2 align-items-center justify-content-center">
          <button
            className={`btn  btn-rounded-medium p-1 ${
              item.amount !== 1 ? "btn-warning" : "disabled"
            } `}
            onClick={() => dispatch(minusAmount(item))}
          >
            <AiOutlineMinusCircle className="fs-5" />
          </button>
          <h6 className="mt-2 px-1">{item.amount}</h6>
          <button
            className="btn btn-success btn-rounded-medium p-1"
            onClick={() => dispatch(plusAmount(item))}
          >
            <AiOutlinePlusCircle className="fs-5" />
          </button>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center justify-content-center">
          <button
            type="button"
            onClick={handleDelete}
            className="btn bg-danger text-white btn-rounded p-2"
          >
            <AiOutlineDelete className="fs-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BasketCard;
