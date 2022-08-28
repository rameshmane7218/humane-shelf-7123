// Cart Actions here
import * as types from "./cart.types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// get item to cart
const getCartItemLoading = (payload) => {
  return {
    type: types.GET_CART_ITEMS_LOADING,
    payload,
  };
};
const getCartItemSuccess = (payload) => {
  return {
    type: types.GET_CART_ITEMS_SUCCESS,
    payload,
  };
};
const getCartItemError = (payload) => {
  return {
    type: types.GET_CART_ITEMS_ERROR,
    payload,
  };
};

const getCartItemAPI = (payload) => (dispatch) => {
  dispatch(getCartItemLoading(payload));

  let cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
  dispatch(getCartItemSuccess(cartItems));
};

// add item to cart
const addItemToCartLoading = (payload) => {
  return {
    type: types.ADD_ITEM_TO_CART_LOADING,
    payload,
  };
};
const addItemToCartSuccess = (payload) => {
  return {
    type: types.ADD_ITEM_TO_CART_SUCCESS,
    payload,
  };
};
const addItemToCartError = (payload) => {
  return {
    type: types.ADD_ITEM_TO_CART_ERROR,
    payload,
  };
};

const addItemToCartAPI = (payload) => (dispatch) => {
  dispatch(addItemToCartLoading(payload));

  setTimeout(() => {
    console.log("add Item...");
    let cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
    payload = { ...payload, _id: uuidv4(), createdAt: new Date().toJSON() };
    cartItems.push(payload);
    cartItems = cartItems.sort((a, b) => {
      if (a.createdAt > b.createdAt) return 1;
      if (a.createdAt < b.createdAt) return -1;
    });
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
    dispatch(addItemToCartSuccess(payload));
    dispatch(getCartItemAPI());
  }, 250);
};

// update cart item
const updateCartItemLoading = (payload) => {
  return {
    type: types.UPDATE_CART_ITEMS_LOADING,
    payload,
  };
};
const updateCartItemSuccess = (payload) => {
  return {
    type: types.UPDATE_CART_ITEMS_SUCCESS,
    payload,
  };
};
const updateCartItemError = (payload) => {
  return {
    type: types.UPDATE_CART_ITEMS_ERROR,
    payload,
  };
};

const updateCartItemAPI = (payload) => (dispatch) => {
  dispatch(updateCartItemLoading(payload));

  setTimeout(() => {
    console.log("fetch details...");
    let cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
    if (cartItems.length > 0) {
      let updated = cartItems.filter((item) => {
        if (item._id === payload.cartId) {
          item.count = payload.newCount;
        }
        return item;
      });

      updated = updated.sort((a, b) => {
        if (a.createdAt > b.createdAt) return 1;
        if (a.createdAt < b.createdAt) return -1;
      });
      localStorage.setItem("cartItem", JSON.stringify(updated));
      dispatch(updateCartItemSuccess(updated));
      dispatch(getCartItemAPI());
    }
  }, 200);
};

// delete cart item
const removeItemFromCartLoading = (payload) => {
  return {
    type: types.REMOVE_CART_ITEMS_LOADING,
    payload,
  };
};
const removeItemFromCartSuccess = (payload) => {
  return {
    type: types.REMOVE_CART_ITEMS_SUCCESS,
    payload,
  };
};

const removeItemFromCartError = (payload) => {
  return {
    type: types.REMOVE_CART_ITEMS_ERROR,
    payload,
  };
};

const removeItemFromCartAPI = (payload) => (dispatch) => {
  dispatch(removeItemFromCartLoading(payload));

  setTimeout(() => {
    let cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
    if (cartItems.length > 0) {
      let updated = cartItems.filter((item) => item._id !== payload);

      updated = updated.sort((a, b) => {
        if (a.createdAt > b.createdAt) return 1;
        if (a.createdAt < b.createdAt) return -1;
      });
      localStorage.setItem("cartItem", JSON.stringify(updated));
      dispatch(removeItemFromCartSuccess(updated));
      dispatch(getCartItemAPI());
    }
  }, 100);
};

const removeAllItemFromCartSuccess = (payload) => {
  return {
    type: types.REMOVE_ALL_CART_ITEMS_SUCCESS,
    payload,
  };
};
const removeAllItemFromCartAPI = (payload) => (dispatch) => {
  dispatch(removeAllItemFromCartSuccess(payload));
};

export {
  getCartItemAPI,
  addItemToCartAPI,
  updateCartItemAPI,
  removeItemFromCartAPI,
  removeAllItemFromCartAPI,
};
