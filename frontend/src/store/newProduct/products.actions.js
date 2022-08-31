import * as types from "./products.types";
import axios from "axios";

// Get all products Api call ##########################################
const getAllProductsLoading = (payload) => {
  return {
    type: types.GET_ALL_PRODUCTS_LOADING,
    payload,
  };
};
const getAllProductsSuccess = (payload) => {
  return {
    type: types.GET_ALL_PRODUCTS_SUCCESS,
    payload,
  };
};
const getAllProductsError = (payload) => {
  return {
    type: types.GET_ALL_PRODUCTS_ERROR,
    payload,
  };
};

const getAllProductsAPI = (payload) => (dispatch) => {
  dispatch(getAllProductsLoading(payload));
  axios
    .get(`/products/alldata`)
    .then((r) => dispatch(getAllProductsSuccess(r.data.data)))
    .catch((e) => dispatch(getAllProductsError(e.data)));
};
// Get filtered products Api call ##########################################
const getFilteredProductsLoading = (payload) => {
  return {
    type: types.GET_FILTERED_PRODUCTS_LOADING,
    payload,
  };
};
const getFilteredProductsSuccess = (payload) => {
  return {
    type: types.GET_FILTERED_PRODUCTS_SUCCESS,
    payload,
  };
};
const getFilteredProductsError = (payload) => {
  return {
    type: types.GET_FILTERED_PRODUCTS_ERROR,
    payload,
  };
};

const getFilteredProductsAPI = (payload) => (dispatch) => {
  dispatch(getFilteredProductsLoading(payload));
  axios
    .get(`/products/filter?${payload}`)
    .then((r) => dispatch(getFilteredProductsSuccess(r.data.data)))
    .catch((e) => dispatch(getFilteredProductsError(e.data)));
};

const getSingleProductLoading = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_LOADING,
    payload: payload,
  };
};
const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload: payload,
  };
};
const getSingleProductError = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_ERROR,
    payload: payload,
  };
};

const getSingleProductAPI = (id) => (dispatch) => {
  dispatch(getSingleProductLoading());
  axios
    .get(`/products/data/${id}`)
    .then((r) => {
      // console.log(r.data, "from reducer function");
      dispatch(getSingleProductSuccess(r.data.data));
    })
    .catch((e) => dispatch(getSingleProductError(e.data)));
};

const getSliderProductLoading = (payload) => {
  return {
    type: types.GET_SLIDER_PRODUCT_LOADING,
    payload: payload,
  };
};
const getSliderProductSuccess = (payload) => {
  return {
    type: types.GET_SLIDER_PRODUCT_SUCCESS,
    payload: payload,
  };
};
const getSliderProductError = (payload) => {
  return {
    type: types.GET_SLIDER_PRODUCT_ERROR,
    payload: payload,
  };
};

const getSliderProductAPI = (id) => (dispatch) => {
  dispatch(getSliderProductLoading());
  axios
    .get(`/products/slider`)
    .then((r) => {
      dispatch(getSliderProductSuccess(r.data.data));
    })
    .catch((e) => dispatch(getSliderProductError(e.data)));
};

export {
  getAllProductsAPI,
  getSingleProductAPI,
  getSliderProductAPI,
  getFilteredProductsAPI,
};
