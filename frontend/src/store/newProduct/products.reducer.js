import * as types from "./products.types";

const initialState = {
  data: [],
  filteredData: [],
  allProducts: {
    loading: false,
    error: false,
    data: [],
  },
  filteredProducts: {
    loading: false,
    error: false,
    data: [],
  },
  getSlider: {
    loading: false,
    error: false,
    TopSellers: [],
    Trendingnow: [],
    dealoftheday: [],
  },

  singleProduct: {
    loading: false,
    error: false,
    data: {
      _id: "",
      productName: "",
      prodHighlights: "",
      longDesc: "",
      imageUrl: "",
      shortDesc: "",
      ratings: "",
      numberOfRatings: "",
      strikedPrice: "",
      price: "",
      discount: "",
      brand: "",
    },
  },
};

export const newProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get all products call ##########################################
    case types.GET_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        allProducts: {
          loading: true,
          error: false,
        },
      };
    case types.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: {
          loading: false,
          error: false,
          data: payload,
        },
        data: payload,
      };
    case types.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        allProducts: {
          loading: false,
          error: true,
        },
      };

    // Get filtered products call ##########################################
    case types.GET_FILTERED_PRODUCTS_LOADING:
      return {
        ...state,
        filteredProducts: {
          loading: true,
          error: false,
        },
      };
    case types.GET_FILTERED_PRODUCTS_SUCCESS:
      return {
        ...state,
        filteredProducts: {
          loading: false,
          error: false,
          data: payload,
        },
        filteredData: payload,
      };
    case types.GET_FILTERED_PRODUCTS_ERROR:
      return {
        ...state,
        filteredProducts: {
          loading: false,
          error: true,
        },
      };

    // single product details case starts
    case types.GET_SINGLE_PRODUCT_LOADING:
      return {
        ...state,
        singleProduct: {
          loading: true,
          error: false,
        },
      };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        singleProduct: {
          loading: false,
          error: true,
        },
      };
    // single product details case ends
    // Slider product details case starts
    case types.GET_SLIDER_PRODUCT_LOADING:
      return {
        ...state,
        getSlider: {
          loading: true,
          error: false,
        },
      };
    case types.GET_SLIDER_PRODUCT_SUCCESS:
      return {
        ...state,
        getSlider: {
          loading: false,
          error: false,
          TopSellers: payload.filter((el) => el.slider == "TopSellers"),
          Trendingnow: payload.filter((el) => el.slider == "Trendingnow"),
          dealoftheday: payload.filter((el) => el.slider == "dealoftheday"),
        },
      };
    case types.GET_SLIDER_PRODUCT_ERROR:
      return {
        ...state,
        getSlider: {
          loading: false,
          error: true,
        },
      };
    // Slider product details case ends

    default:
      return state;
  }
};
