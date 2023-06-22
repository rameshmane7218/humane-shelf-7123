import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import axios from "axios";
// default url
//axios.defaults.baseURL = "https://tata1mg-backend-nem201.herokuapp.com"; //old
//axios.defaults.baseURL = "https://tata1mg-backend-nem201.up.railway.app"; //new
axios.defaults.baseURL = "https://tatabackend.vercel.app"; //new
// axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
