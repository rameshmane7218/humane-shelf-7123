import * as types from "./products.types";

const initialState = {
  mangoes: {
    loading: false,
    error: false,
    data: [],
  },
  //fruits
  freshFruits: {
    loading: false,
    error: false,
    data: [],
  },
  exoticFruits: {
    loading: false,
    error: false,
    data: [],
  },
  fruitCombos: {
    loading: false,
    error: false,
    data: [],
  },
  // vegetables
  dailyVeggies: {
    loading: false,
    error: false,
    data: [],
  },
  exoticVegetables: {
    loading: false,
    error: false,
    data: [],
  },
  cutsPeeledSprouts: {
    loading: false,
    error: false,
    data: [],
  },
  vegetableCombos: {
    loading: false,
    error: false,
    data: [],
  },
  herbsLeafies: {
    loading: false,
    error: false,
    data: [],
  },

  // fry fruits
  premiumQualityDryFruits: {
    loading: false,
    error: false,
    data: [],
  },

  bestDeals: {
    loading: false,
    error: false,
    data: [],
  },
  singleProduct: {
    loading: false,
    error: false,
    data: {
      id: "",
      imgUrl: "",
      name: "",
      packSize: "",
      price: "",
      strikePrice: "",
      soldOut: "",
      notifyme: "",
      category: "",
      subCatagory: "",
      tooltipText: "",
      benefits: "",
      description: "",
      info: "",
    },
  },
};

export const porductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get mangoes Api call ##########################################
    case types.GET_MANGOES_LOADING:
      return {
        ...state,
        mangoes: {
          loading: true,
          error: false,
        },
      };
    case types.GET_MANGOES_SUCCESS:
      return {
        ...state,
        mangoes: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_MANGOES_ERROR:
      return {
        ...state,
        mangoes: {
          loading: false,
          error: true,
        },
      };
    // Get fresh fruits Api call ##########################################
    case types.GET_FRESH_FRUITS_LOADING:
      return {
        ...state,
        freshFruits: {
          loading: true,
          error: false,
        },
      };
    case types.GET_FRESH_FRUITS_SUCCESS:
      return {
        ...state,
        freshFruits: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_FRESH_FRUITS_ERROR:
      return {
        ...state,
        freshFruits: {
          loading: false,
          error: true,
        },
      };
    // Get exotic fruits Api call ##########################################
    case types.GET_EXOTIC_FRUITS_LOADING:
      return {
        ...state,
        exoticFruits: {
          loading: true,
          error: false,
        },
      };
    case types.GET_EXOTIC_FRUITS_SUCCESS:
      return {
        ...state,
        exoticFruits: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_EXOTIC_FRUITS_ERROR:
      return {
        ...state,
        exoticFruits: {
          loading: false,
          error: true,
        },
      };
    // Get combos fruits Api call ##########################################
    case types.GET_COMBOS_FRUITS_LOADING:
      return {
        ...state,
        fruitCombos: {
          loading: true,
          error: false,
        },
      };
    case types.GET_COMBOS_FRUITS_SUCCESS:
      return {
        ...state,
        fruitCombos: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_COMBOS_FRUITS_ERROR:
      return {
        ...state,
        fruitCombos: {
          loading: false,
          error: true,
        },
      };
    // Get daily Vegetable Api call ##########################################
    case types.GET_DAILY_VAGETABLES_LOADING:
      return {
        ...state,
        dailyVeggies: {
          loading: true,
          error: false,
        },
      };
    case types.GET_DAILY_VAGETABLES_SUCCESS:
      return {
        ...state,
        dailyVeggies: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_DAILY_VAGETABLES_ERROR:
      return {
        ...state,
        dailyVeggies: {
          loading: false,
          error: true,
        },
      };
    // Get exotic Vegetables Api call ##########################################
    case types.GET_EXOTIC_VAGETABLES_LOADING:
      return {
        ...state,
        exoticVegetables: {
          loading: true,
          error: false,
        },
      };
    case types.GET_EXOTIC_VAGETABLES_SUCCESS:
      return {
        ...state,
        exoticVegetables: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_EXOTIC_VAGETABLES_ERROR:
      return {
        ...state,
        exoticVegetables: {
          loading: false,
          error: true,
        },
      };

    // Get cuts Peeled Api call ##########################################
    case types.GET_CUTS_PEELED_LOADING:
      return {
        ...state,
        cutsPeeledSprouts: {
          loading: true,
          error: false,
        },
      };
    case types.GET_CUTS_PEELED_SUCCESS:
      return {
        ...state,
        cutsPeeledSprouts: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_CUTS_PEELED_ERROR:
      return {
        ...state,
        cutsPeeledSprouts: {
          loading: false,
          error: true,
        },
      };

    // Get combos Vegetables Api call ##########################################
    case types.GET_COMBOS_VAGETABLES_LOADING:
      return {
        ...state,
        vegetableCombos: {
          loading: true,
          error: false,
        },
      };
    case types.GET_COMBOS_VAGETABLES_SUCCESS:
      return {
        ...state,
        vegetableCombos: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_COMBOS_VAGETABLES_ERROR:
      return {
        ...state,
        vegetableCombos: {
          loading: false,
          error: true,
        },
      };

    // Get herbs Leafs Api call ##########################################
    case types.GET_HERBS_LEAFS_LOADING:
      return {
        ...state,
        herbsLeafies: {
          loading: true,
          error: false,
        },
      };
    case types.GET_HERBS_LEAFS_SUCCESS:
      return {
        ...state,
        herbsLeafies: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_HERBS_LEAFS_ERROR:
      return {
        ...state,
        herbsLeafies: {
          loading: false,
          error: true,
        },
      };

    // Get dry fruits Api call ##########################################
    case types.GET_DRY_FRUITS_LOADING:
      return {
        ...state,
        premiumQualityDryFruits: {
          loading: true,
          error: false,
        },
      };
    case types.GET_DRY_FRUITS_SUCCESS:
      return {
        ...state,
        premiumQualityDryFruits: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_DRY_FRUITS_ERROR:
      return {
        ...state,
        premiumQualityDryFruits: {
          loading: false,
          error: true,
        },
      };

    // Get bestDeals Api call ##########################################
    case types.GET_BEST_DEALS_LOADING:
      return {
        ...state,
        bestDeals: {
          loading: true,
          error: false,
        },
      };
    case types.GET_BEST_DEALS_SUCCESS:
      return {
        ...state,
        bestDeals: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_BEST_DEALS_ERROR:
      return {
        ...state,
        bestDeals: {
          loading: false,
          error: true,
        },
      };
    // single product details case starts
    case types.GET_BEST_DEALS_LOADING:
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

    default:
      return state;
  }
};
