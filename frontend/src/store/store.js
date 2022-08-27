import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./authentication/auth.reducer";

import { cartReducer } from "./cart/cart.reducer";
import { newProductsReducer } from "./newProduct/products.reducer";

import { porductsReducer } from "./products/products.reducer";

const rootReducer = combineReducers({
  products: newProductsReducer,
  // products: porductsReducer,

  auth: authReducer,

  cart: cartReducer,
});
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);
