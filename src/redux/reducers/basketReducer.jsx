import { actionTypes } from "../actions/actionTypes";

const initialState = {
  basket: [],
  total: 0,
  date: new Date().toLocaleString(),
};

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_BASKET:
      const index = state.basket.findIndex((i) => i.id === payload.id);

      if (index >= 0) {
        const clone = [...state.basket];
        clone[index].amount++;
        return { ...state, basket: clone };
      } else {
        const newArr = state.basket.concat({ ...payload, amount: 1 });
        return {
          ...state,
          basket: newArr,
          total: state.total + payload.price.current.value,
        };
      }
    case actionTypes.PLUS_AMOUNT:
      const index2 = state.basket.findIndex((i) => i.id === payload.id);

      if (index2 >= 0) {
        const clone2 = [...state.basket];
        clone2[index2].amount++;
        return {
          ...state,
          basket: clone2,
          total: state.total + payload.price.current.value,
        };
      } else {
        const newArr2 = state.basket.concat({ ...payload, amount: 1 });
        return {
          ...state,
          basket: newArr2,
          total: state.total + payload.price.current.value,
        };
      }
    case actionTypes.MINUS_AMOUNT:
      const index3 = state.basket.findIndex((i) => i.id === payload.id);

      if (index3 >= 0) {
        const clone3 = [...state.basket];

        if (clone3[index3].amount > 1) {
          clone3[index3].amount--;
          return {
            ...state,
            basket: clone3,
            total: state.total - payload.price.current.value,
          };
        } else {
          return state;
        }
      } else {
        const newArr3 = state.basket.concat({ ...payload, amount: 1 });
        return {
          ...state,
          basket: newArr3,
          total: state.total - payload.price.current.value,
        };
      }
    case actionTypes.DELETE_PRODUCT:
      const filtered = state.basket.filter((item) => item.id !== payload);
      const deleteItem = state.basket.filter((item) => item.id === payload);
      const deletePrice =
        deleteItem[0].price.current.value * deleteItem[0].amount;

      return { ...state, basket: filtered, total: state.total - deletePrice };

    default:
      return state;
  }
};

export default basketReducer;
