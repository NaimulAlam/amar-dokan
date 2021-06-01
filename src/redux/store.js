import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducerShop from "./Reducers/reducerShop";

const rootReducer = combineReducers({
    shop: reducerShop
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
