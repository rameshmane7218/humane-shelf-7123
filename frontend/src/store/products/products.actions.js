import * as types from "./products.types";
import axios from "axios";

// Get Mangoes Api call ##########################################
const getMangoesLoading = (payload) => {
  return {
    type: types.GET_MANGOES_LOADING,
    payload,
  };
};
const getMangoesSuccess = (payload) => {
  return {
    type: types.GET_MANGOES_SUCCESS,
    payload,
  };
};
const getMangoesError = (payload) => {
  return {
    type: types.GET_MANGOES_ERROR,
    payload,
  };
};

const getMangoesAPI = (payload) => (dispatch) => {
  dispatch(getMangoesLoading(payload));
  axios
    .get(`/fraazo/subCatagory/mangoes`)
    .then((r) => dispatch(getMangoesSuccess(r.data)))
    .catch((e) => dispatch(getMangoesError(e.data)));
};

// Get fresh fruits Api call ##########################################
const getFreshFruitsLoading = (payload) => {
  return {
    type: types.GET_FRESH_FRUITS_LOADING,
    payload,
  };
};
const getFreshFruitsSuccess = (payload) => {
  return {
    type: types.GET_FRESH_FRUITS_SUCCESS,
    payload,
  };
};
const getFreshFruitsError = (payload) => {
  return {
    type: types.GET_FRESH_FRUITS_ERROR,
    payload,
  };
};

const getFreshFruitsAPI = (payload) => (dispatch) => {
  dispatch(getFreshFruitsLoading(payload));
  axios
    .get(`/fraazo/subCatagory/freshFruits`)
    .then((r) => dispatch(getFreshFruitsSuccess(r.data)))
    .catch((e) => dispatch(getFreshFruitsError(e.data)));
};

// Get exotic fruits Api call ##########################################
const getExoticFruitsLoading = (payload) => {
  return {
    type: types.GET_EXOTIC_FRUITS_LOADING,
    payload,
  };
};
const getExoticFruitsSuccess = (payload) => {
  return {
    type: types.GET_EXOTIC_FRUITS_SUCCESS,
    payload,
  };
};
const getExoticFruitsError = (payload) => {
  return {
    type: types.GET_EXOTIC_FRUITS_ERROR,
    payload,
  };
};

const getExoticFruitsAPI = (payload) => (dispatch) => {
  dispatch(getExoticFruitsLoading(payload));
  axios
    .get(`/fraazo/subCatagory/exoticFruits`)
    .then((r) => dispatch(getExoticFruitsSuccess(r.data)))
    .catch((e) => dispatch(getExoticFruitsError(e.data)));
};

// Get combo fruits Api call ##########################################
const getCombosFruitsLoading = (payload) => {
  return {
    type: types.GET_COMBOS_FRUITS_LOADING,
    payload,
  };
};
const getCombosFruitsSuccess = (payload) => {
  return {
    type: types.GET_COMBOS_FRUITS_SUCCESS,
    payload,
  };
};
const getCombosFruitsError = (payload) => {
  return {
    type: types.GET_COMBOS_FRUITS_ERROR,
    payload,
  };
};

const getCombosFruitsAPI = (payload) => (dispatch) => {
  dispatch(getCombosFruitsLoading(payload));
  axios
    .get(`/fraazo/subCatagory/fruitCombos`)
    .then((r) => dispatch(getCombosFruitsSuccess(r.data)))
    .catch((e) => dispatch(getCombosFruitsError(e.data)));
};

// VEGETABLES

// Get combo fruits Api call ##########################################
const getDailyVegetablesLoading = (payload) => {
  return {
    type: types.GET_DAILY_VAGETABLES_LOADING,
    payload,
  };
};
const getDailyVegetablesSuccess = (payload) => {
  return {
    type: types.GET_DAILY_VAGETABLES_SUCCESS,
    payload,
  };
};
const getDailyVegetablesError = (payload) => {
  return {
    type: types.GET_DAILY_VAGETABLES_ERROR,
    payload,
  };
};

const getDailyVegetablesAPI = (payload) => (dispatch) => {
  dispatch(getDailyVegetablesLoading(payload));
  axios
    .get(`/fraazo/subCatagory/dailyVeggies`)
    .then((r) => dispatch(getDailyVegetablesSuccess(r.data)))
    .catch((e) => dispatch(getDailyVegetablesError(e.data)));
};

// Get Exotic vegetables Api call ##########################################
const getExoticVegetablesLoading = (payload) => {
  return {
    type: types.GET_EXOTIC_VAGETABLES_LOADING,
    payload,
  };
};
const getExoticVegetablesSuccess = (payload) => {
  return {
    type: types.GET_EXOTIC_VAGETABLES_SUCCESS,
    payload,
  };
};
const getExoticVegetablesError = (payload) => {
  return {
    type: types.GET_EXOTIC_VAGETABLES_ERROR,
    payload,
  };
};

const getExoticVegetablesAPI = (payload) => (dispatch) => {
  dispatch(getExoticVegetablesLoading(payload));
  axios
    .get(`/fraazo/subCatagory/exoticVegetables`)
    .then((r) => dispatch(getExoticVegetablesSuccess(r.data)))
    .catch((e) => dispatch(getExoticVegetablesError(e.data)));
};

// Get cuts and peeled Api call ##########################################
const getCutsPeeledLoading = (payload) => {
  return {
    type: types.GET_CUTS_PEELED_LOADING,
    payload,
  };
};
const getCutsPeeledSuccess = (payload) => {
  return {
    type: types.GET_CUTS_PEELED_SUCCESS,
    payload,
  };
};
const getCutsPeeledError = (payload) => {
  return {
    type: types.GET_CUTS_PEELED_ERROR,
    payload,
  };
};

const getCutsPeeledAPI = (payload) => (dispatch) => {
  dispatch(getCutsPeeledLoading(payload));
  axios
    .get(`/fraazo/subCatagory/cutsPeeled`)
    .then((r) => dispatch(getCutsPeeledSuccess(r.data)))
    .catch((e) => dispatch(getCutsPeeledError(e.data)));
};
// Get cobmo vegetables Api call ##########################################
const getCombosVegetablesLoading = (payload) => {
  return {
    type: types.GET_COMBOS_VAGETABLES_LOADING,
    payload,
  };
};
const getCombosVegetablesSuccess = (payload) => {
  return {
    type: types.GET_COMBOS_VAGETABLES_SUCCESS,
    payload,
  };
};
const getCombosVegetablesError = (payload) => {
  return {
    type: types.GET_COMBOS_VAGETABLES_ERROR,
    payload,
  };
};

const getCombosVegetablesAPI = (payload) => (dispatch) => {
  dispatch(getCombosVegetablesLoading(payload));
  axios
    .get(`/fraazo/subCatagory/vegetableCombos`)
    .then((r) => dispatch(getCombosVegetablesSuccess(r.data)))
    .catch((e) => dispatch(getCombosVegetablesError(e.data)));
};

// Get herbs and leafs Api call ##########################################
const getHerbsLeafsLoading = (payload) => {
  return {
    type: types.GET_HERBS_LEAFS_LOADING,
    payload,
  };
};
const getHerbsLeafsSuccess = (payload) => {
  return {
    type: types.GET_HERBS_LEAFS_SUCCESS,
    payload,
  };
};
const getHerbsLeafsError = (payload) => {
  return {
    type: types.GET_HERBS_LEAFS_ERROR,
    payload,
  };
};

const getHerbsLeafsAPI = (payload) => (dispatch) => {
  dispatch(getHerbsLeafsLoading(payload));
  axios
    .get(`/fraazo/subCatagory/herbsLeafies`)
    .then((r) => dispatch(getHerbsLeafsSuccess(r.data)))
    .catch((e) => dispatch(getHerbsLeafsError(e.data)));
};

// Get DRY FRUITS Api call ##########################################
const getDryFruitsLoading = (payload) => {
  return {
    type: types.GET_DRY_FRUITS_LOADING,
    payload,
  };
};
const getDryFruitsSuccess = (payload) => {
  return {
    type: types.GET_DRY_FRUITS_SUCCESS,
    payload,
  };
};
const getDryFruitsError = (payload) => {
  return {
    type: types.GET_DRY_FRUITS_ERROR,
    payload,
  };
};

const getDryFruitsAPI = (payload) => (dispatch) => {
  dispatch(getDryFruitsLoading(payload));
  axios
    .get(`/fraazo/subCatagory/dryFruits`)
    .then((r) => dispatch(getDryFruitsSuccess(r.data)))
    .catch((e) => dispatch(getDryFruitsError(e.data)));
};

// Get BEST DEALS Api call ##########################################
const getBestDealsLoading = (payload) => {
  return {
    type: types.GET_BEST_DEALS_LOADING,
    payload,
  };
};
const getBestDealsSuccess = (payload) => {
  return {
    type: types.GET_BEST_DEALS_SUCCESS,
    payload,
  };
};
const getBestDealsError = (payload) => {
  return {
    type: types.GET_BEST_DEALS_ERROR,
    payload,
  };
};

const getBestDealsAPI = (payload) => (dispatch) => {
  dispatch(getBestDealsLoading(payload));
  axios
    .get(`/fraazo/subCatagory/bestDeals`)
    .then((r) => dispatch(getBestDealsSuccess(r.data)))
    .catch((e) => dispatch(getBestDealsError(e.data)));
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
    .get(`/fraazo/${id}`)
    .then((r) => {
      console.log(r.data, "from reducer function");
      dispatch(getSingleProductSuccess(r.data));
    })
    .catch((e) => dispatch(getSingleProductError(e.data)));
};

export {
  getMangoesAPI,
  getFreshFruitsAPI,
  getExoticFruitsAPI,
  getCombosFruitsAPI,
  getDailyVegetablesAPI,
  getExoticVegetablesAPI,
  getCutsPeeledAPI,
  getCombosVegetablesAPI,
  getHerbsLeafsAPI,
  getDryFruitsAPI,
  getBestDealsAPI,
  getSingleProductAPI,
};
