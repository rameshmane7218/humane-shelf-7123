import * as types from "./cart.types";

// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
    withoutDiscountPrice: 0,
    withDiscountPrice: 0,
  },
  addCartItem: {
    _id: "",
    loading: false,
    error: false,
  },
  updateCartItem: {
    _id: "",
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: JSON.parse(localStorage.getItem("cartItems")) || [],
};
export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    // Get Cart data ....
    case types.GET_CART_ITEMS_LOADING:
      return {
        ...state,
        getCartItems: {
          loading: true,
          error: false,
          withoutDiscountPrice: "",
          withDiscountPrice: "",
        },
      };
    case types.GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        getCartItems: {
          loading: false,
          error: false,
          withoutDiscountPrice: payload.reduce((acc, el) => {
            if (el.strikePrice) {
              acc += Number(el.strikePrice) * Number(el.count);
            } else {
              acc += Number(el.price) * Number(el.count);
            }
            return acc;
          }, 0),
          withDiscountPrice: payload.reduce((acc, el) => {
            if (el.strikePrice) {
              let save = el.strikePrice - el.price;
              acc += Number(el.strikePrice) * Number(el.count) - save;
            } else {
              acc += Number(el.price) * Number(el.count);
            }
            return acc;
          }, 0),
        },
        data: payload,
      };
    case types.GET_CART_ITEMS_ERROR:
      return {
        ...state,
        getCartItems: {
          loading: false,
          error: true,
          withoutDiscountPrice: "",
          withDiscountPrice: ",",
        },
      };
    // Add To Cart Items ....
    case types.ADD_ITEM_TO_CART_LOADING:
      return {
        ...state,
        addCartItem: {
          _id: payload?._productId,
          loading: true,
          error: false,
        },
      };
    case types.ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        addCartItem: {
          _id: payload?._productId,
          loading: false,
          error: false,
        },
        data: [...state.data, payload],
      };
    case types.ADD_ITEM_TO_CART_ERROR:
      return {
        ...state,
        addCartItem: {
          _id: payload?._productId,
          loading: false,
          error: true,
        },
      };
    // Update Cart Items ....
    case types.UPDATE_CART_ITEMS_LOADING:
      return {
        ...state,
        updateCartItem: {
          _id: payload?._productId,
          loading: true,
          error: false,
        },
      };
    case types.UPDATE_CART_ITEMS_SUCCESS:
      return {
        ...state,
        updateCartItem: {
          loading: false,
          error: false,
          _id: payload?._productId,
        },
        data: [...payload],
      };
    case types.UPDATE_CART_ITEMS_ERROR:
      return {
        ...state,
        updateCartItem: {
          loading: false,
          error: true,
          _id: payload?._productId,
        },
      };
    // Remove Cart Items ....
    case types.REMOVE_CART_ITEMS_LOADING:
      return {
        ...state,
        removeCartItem: {
          loading: true,
          error: false,
        },
      };
    case types.REMOVE_CART_ITEMS_SUCCESS:
      return {
        ...state,
        removeCartItem: {
          loading: false,
          error: false,
        },
        data: [...payload],
      };
    case types.REMOVE_CART_ITEMS_ERROR:
      return {
        ...state,
        removeCartItem: {
          loading: false,
          error: true,
        },
      };

    default:
      return state;
  }
};
