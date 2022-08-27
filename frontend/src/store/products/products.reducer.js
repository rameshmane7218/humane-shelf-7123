 import { USEROTP, USERNAME } from "./products.types";
import { Loaddata, Savedata } from "../../utils/localstorage";
import {
  DESDATA,
  BRANDFILTER,
  DISCOUNTFILTER,
  GETDATA,
  SORTDATA,
  CARTDATA
} from "./products.types";

const initState = {
  otp: Loaddata("otp") || "",
  name: Loaddata("name") || "",
  productsData: [],
  allproducts: [],
  desData: {},
  cartdata:[]
};

export const porductsReducer = (state = initState, action) => {
  switch (action.type) {
    case USEROTP: {
      let data = action.payload;
      Savedata("otp", data);

      return {
        ...state,
        otp: data,
      };
    }

    case USERNAME: {
      let data = action.payload;
      Savedata("name", data);

      return {
        ...state,
        name: data,
      };
    }

    case GETDATA: {
      return {
        ...state,
        productsData: action.payload,
        allproducts: action.payload,
      };
    }

    case DESDATA: {
      return {
        ...state,
        desData: action.payload,
      };
    }

    case CARTDATA:{
      return{
        ...state,
        cartdata:action.payload
      }
    }
    case BRANDFILTER: {
      return {
        ...state,
        productsData: action.payload,
      };
    }

    case DISCOUNTFILTER: {
      return {
        ...state,
        productsData: action.payload,
      };
    }

    case SORTDATA: {
      return {
        ...state,
        productsData: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
