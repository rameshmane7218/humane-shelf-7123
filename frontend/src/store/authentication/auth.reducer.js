import * as types from "./auth.types";
let token = localStorage.getItem("isAuth") || false;
let userDetails = JSON.parse(localStorage.getItem("currentLogin")) || false;
const initialState = {
  otp: "",
  mobile: "",
  error: false,
  isAuth: token,
  userData : userDetails,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_OTP:
      return {
        ...state,
        mobile: payload,
        otp: payload,
      };
    case types.GET_LOGIN:
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isAuth: true,
        userData: JSON.parse(localStorage.getItem("currentLogin")),
      };
    case types.LOGOUT:
      localStorage.removeItem("isAuth");
      localStorage.removeItem("currentLogin");
      localStorage.removeItem("flag");
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
