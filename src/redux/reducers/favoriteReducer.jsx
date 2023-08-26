import { actionTypes } from "../actions/actionTypes";

const initialState = {
  favorite: [],
};

const favoriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_FAVORITE:
      const index = state.favorite.findIndex((i) => i.id === payload.id);
      console.log(index);
      console.log("denem", state);
      if (index === -1) {
        const clone = [
          ...state.favorite,
          { ...payload, isFavorite: true, date: new Date().toLocaleString() },
        ];
        console.log("clo", clone);

        return { ...state, favorite: clone };
      } else {
        return state;
      }

    case actionTypes.DELETE_FAVORITE:
      const deleted = state.favorite.filter((item) => item.id !== payload);
      console.log("deleted", deleted);
      return { ...state, favorite: deleted };

    default:
      return state;
  }
};

export default favoriteReducer;
