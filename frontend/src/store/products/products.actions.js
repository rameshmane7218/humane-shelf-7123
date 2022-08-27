// import * as types from "./products.types";
// import axios from "axios";

// Get Mangoes Api call ##########################################
// const getMangoesLoading = (payload) => {
//   return {
//     type: types.GET_MANGOES_LOADING,
//     payload,
//   };
// };
import { USEROTP,
   USERNAME ,
   USERCART,
   DESDATA,
  BRANDFILTER,
  DISCOUNTFILTER,
  GETDATA,
  SORTDATA,
  CARTDATA} from "./products.types";
import axios from "axios";


export const getdata = (payload) => ({
  type: GETDATA,
  payload,
});

export const desdata = (payload) => ({
  type: DESDATA,
  payload,
});

export const sortdata = (payload) => ({
  type: SORTDATA,
  payload,
});



export const filterdatabrand = (payload) => ({
  type: BRANDFILTER,
  payload,
});

export const filterdatadiscount = (payload) => ({
  type: DISCOUNTFILTER,
  payload,
});

export const cartdata = (payload) => ({
  type: CARTDATA,
  payload,
});

export const userotp = (payload) => {
  return {
    type: USEROTP,
    payload,
  };
};

export const username = (payload) => {
  return {
    type: USERNAME,
    payload,
  };
};

export const fetchdata = () => async(dispatch) => {
  let res = await axios.get(
    "http://localhost:5000/alldata"
  );
  console.log(res.data.data)
  dispatch(getdata(res.data.data));
};

export const fetchdes = (payload) => async (dispatch) => {
  let res = await axios.get(
    `http://localhost:5000/data/${payload}`
  );
  dispatch(desdata(res.data.data));
};

export const sortproducts = (payload) => async (dispatch) => {
  let res = await axios.get(
    "http://localhost:5000/alldata"
  );
  let arr = res.data.data;
  if (payload == "rel") {
    dispatch(sortdata(arr));
  } else if (payload == "plth") {
    arr.sort((a, b) => +a.price - +b.price);
    dispatch(sortdata(arr));
  } else if (payload == "phtl") {
    arr.sort((a, b) => +b.price - +a.price);
    dispatch(sortdata(arr));
  } else if (payload == "rlth") {
    arr.sort((a, b) => +a.ratings - +b.ratings);
    dispatch(sortdata(arr));
  } else if (payload == "rhtl") {
    arr.sort((a, b) => +b.ratings - +a.ratings);
    dispatch(sortdata(arr));
  }
};

export const fetchfilterbrand = (payload) => (dispatch) => {
  let res = axios.get(
    `http://localhost:5000/filter?brand=${payload}`
  );
  dispatch(filterdatabrand(res.data.data));
};

export const fetchfilterdiscount = (payload) => async (dispatch) => {
  let res = await axios.get(
    `http://localhost:5000/filter?discount=${payload}`
  );
  dispatch(filterdatadiscount(res.data.data));
};

export const AddToCart = (payload) => async (dispatch) => {
  let res = await axios.post(
    `http://localhost:5000/postcart`,
    payload
  );
  console.log(res);
  dispatch(fetchcart(payload.name));
  alert("Product added successfully!");
};

export const fetchcart = (name) => (dispatch) => {
  axios.get(
    `http://localhost:5000/getcart/${name}`
  )
  .then(({data})=>{
    dispatch(cartdata(data.data[0].cats))      
})

};

export const removecart = (obj) => (dispatch) => {
  axios.post(
    `http://localhost:5000/removequant`
  ,obj)
  .then(({data})=>{
    dispatch(cartdata(data.data[0].cats))      
})

};