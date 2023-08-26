import { actionTypes } from "./actionTypes";
import axios from "axios";
import { options } from "../../utils/constant";

export const getProducts = () => (dispatch) => {
  axios
    .get("https://asos2.p.rapidapi.com/products/v2/list", options)
    .then((res) =>
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: res.data.products,
      })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.SET_ERROR,
      })
    );
};

export function addToBasket(item) {
  return {
    type: actionTypes.ADD_TO_BASKET,
    payload: item,
  };
}
export function plusAmount(item) {
  return {
    type: actionTypes.PLUS_AMOUNT,
    payload: item,
  };
}
export function minusAmount(item) {
  return {
    type: actionTypes.MINUS_AMOUNT,
    payload: item,
  };
}

export function addToFavorite(item) {
  return {
    type: actionTypes.ADD_TO_FAVORITE,
    payload: item,
  };
}

export function updateFavorite(item) {
  return {
    type: actionTypes.UPDATE_FAVORITE,
    payload: item,
  };
}
