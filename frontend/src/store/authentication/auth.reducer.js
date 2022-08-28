import * as types from "./auth.types";
let token = localStorage.getItem("isAuth") || false;
let userDetails = JSON.parse(localStorage.getItem("currentLogin")) || false;
const initialState = {
  userId: "",
  isAuth: !!token,
  userData: userDetails,
  signUpData: {
    loading: false,
    error: false,
    data: {},
  },
  loginData: {
    loading: false,
    error: false,
    data: {},
  },
  profile: {
    loading: false,
    error: false,
    data: {},
  },
  logout: {
    loading: false,
    error: false,
  },
  require: {
    isOpenAuth: "",
    onOpenAuth: "",
    onCloseAuth: "",
    method: "",
    setMethod: "",
  },
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Signup ##########################################
    case types.USER_SIGNUP_LOADING:
      return {
        ...state,
        signUpData: {
          loading: true,
          error: false,
        },
      };
    case types.USER_SIGNUP_SUCCESS:
      localStorage.setItem("userId", payload.userId);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth", true);

      return {
        ...state,
        signUpData: {
          loading: false,
          error: false,
          data: payload,
        },

        isAuth: true,
        userId: payload.userId,
      };
    case types.USER_SIGNUP_ERROR:
      return {
        ...state,
        signUpData: {
          loading: false,
          error: true,
        },
      };
    // Login ##########################################
    case types.USER_LOGIN_LOADING:
      return {
        ...state,
        loginData: {
          loading: true,
          error: false,
        },
      };
    case types.USER_LOGIN_SUCCESS:
      localStorage.setItem("userId", payload.userId);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        loginData: {
          loading: false,
          error: false,
          data: payload,
        },

        isAuth: true,
        userId: payload.userId,
      };
    case types.USER_LOGIN_ERROR:
      return {
        ...state,
        loginData: {
          loading: false,
          error: true,
        },
      };
    // get Profile ##########################################
    case types.USER_GET_PROFILE_LOADING:
      return {
        ...state,
        profile: {
          loading: true,
          error: false,
        },
      };
    case types.USER_GET_PROFILE_SUCCESS:
      localStorage.setItem("currentLogin", JSON.stringify(payload));
      return {
        ...state,
        profile: {
          loading: false,
          error: false,
          data: payload,
        },
        userId: payload._id,
        userData: payload,
      };
    case types.USER_GET_PROFILE_ERROR:
      return {
        ...state,
        profile: {
          loading: false,
          error: true,
        },
      };
    // Logout ##########################################
    case types.USER_LOGOUT_LOADING:
      return {
        ...state,
        logout: {
          loading: true,
          error: false,
        },
      };
    case types.USER_LOGOUT_SUCCESS:
      localStorage.removeItem("isAuth");
      localStorage.removeItem("currentLogin");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      return {
        ...state,
        logout: {
          loading: false,
          error: false,
        },
        isAuth: false,
        userId: "",
        userData: false,
      };
    case types.USER_LOGOUT_ERROR:
      return {
        ...state,
        logout: {
          loading: false,
          error: true,
        },
      };

    case types.USER_REQUIRE_AUTH:
      return {
        ...state,
        require: {
          isOpenAuth: payload.isOpenAuth,
          onOpenAuth: payload.onOpenAuth,
          onCloseAuth: payload.onCloseAuth,
          method: payload.method,
          setMethod: payload.setMethod,
        },
      };
    default:
      return state;
  }
};
