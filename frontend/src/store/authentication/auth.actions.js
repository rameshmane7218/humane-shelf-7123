import axios from "axios";
import * as types from "./auth.types";

// LOGIN ##########################################
const userLoginLoading = (payload) => {
  return {
    type: types.USER_LOGIN_LOADING,
    payload,
  };
};
const userLoginSuccess = (payload) => {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload,
  };
};
const userLoginError = (payload) => {
  return {
    type: types.USER_LOGIN_ERROR,
    payload,
  };
};
const userLoginAPI = (payload) => (dispatch) => {
  dispatch(userLoginLoading(payload));
  axios
    .post(`/user/login`, payload, {
      headers: {
        Authorization: "Bearer " + payload.token,
      },
    })
    .then((r) => dispatch(userLoginSuccess(r.data)))
    .then(() =>
      dispatch(
        userGetProfileAPI({
          userId: localStorage.getItem("userId"),
          token: localStorage.getItem("token"),
        })
      )
    )
    .catch((e) => dispatch(userLoginError(e.data)));
};

// USER_SIGNUP ##########################################
const userSignupLoading = (payload) => {
  return {
    type: types.USER_SIGNUP_LOADING,
    payload,
  };
};
const userSignupSuccess = (payload) => {
  return {
    type: types.USER_SIGNUP_SUCCESS,
    payload,
  };
};
const userSignupError = (payload) => {
  return {
    type: types.USER_SIGNUP_ERROR,
    payload,
  };
};
const userSignupAPI = (payload) => (dispatch) => {
  dispatch(userSignupLoading(payload));
  axios
    .post(`/user/signup`, payload, {
      headers: {
        Authorization: "Bearer " + payload.token,
      },
    })
    .then((r) => dispatch(userSignupSuccess(r.data)))
    .then(() =>
      dispatch(
        userGetProfileAPI({
          userId: localStorage.getItem("userId"),
          token: localStorage.getItem("token"),
        })
      )
    )
    .catch((e) => dispatch(userSignupError(e.data)));
};

// USER_LOGOUT ##########################################
const userLogoutLoading = (payload) => {
  return {
    type: types.USER_LOGOUT_LOADING,
    payload,
  };
};
const userLogoutSuccess = (payload) => {
  return {
    type: types.USER_LOGOUT_SUCCESS,
    payload,
  };
};
const userLogoutError = (payload) => {
  return {
    type: types.USER_LOGOUT_ERROR,
    payload,
  };
};

const userLogoutAPI = (payload) => (dispatch) => {
  dispatch(userLogoutLoading(payload));
  axios
    .post(`/user/logout/${payload}`)
    .then((r) => dispatch(userLogoutSuccess(r.data)))
    .catch((e) => dispatch(userLogoutError(e.data)));
};

// USER_GET_PROFILE ##########################################
const userGetProfileLoading = (payload) => {
  return {
    type: types.USER_GET_PROFILE_LOADING,
    payload,
  };
};
const userGetProfileSuccess = (payload) => {
  return {
    type: types.USER_GET_PROFILE_SUCCESS,
    payload,
  };
};
const userGetProfileError = (payload) => {
  return {
    type: types.USER_GET_PROFILE_ERROR,
    payload,
  };
};

const userGetProfileAPI = (payload) => (dispatch) => {
  dispatch(userGetProfileLoading(payload));
  axios
    .get(`/user/profile/${payload.userId}`, {
      headers: {
        Authorization: "Bearer " + payload.token,
      },
    })
    .then((r) => dispatch(userGetProfileSuccess(r.data)))
    .catch((e) => dispatch(userGetProfileError(e.data)));
};

const requireAuth = (payload) => (dispatch) => {
  dispatch({ type: types.USER_REQUIRE_AUTH, payload });
};
export {
  userLoginAPI,
  userSignupAPI,
  userLogoutAPI,
  userGetProfileAPI,
  requireAuth,
};
