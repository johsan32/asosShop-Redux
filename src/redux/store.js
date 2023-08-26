import productReducer from "./reducers/productReducer"
import basketReducer from "./reducers/basketReducer"
import { createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
    productState : productReducer, 
    basketState: basketReducer,
    favoriteState: favoriteReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));