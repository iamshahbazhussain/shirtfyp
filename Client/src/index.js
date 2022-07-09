import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"

import App from "./App";

import { Provider } from "react-redux"
import GlobalState from "./GlobalStae"

import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={GlobalState} >
      <App />
    </Provider>
  </BrowserRouter>
);