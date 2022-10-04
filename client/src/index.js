import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://dminish.heroku.app/"
    : "http://localhost:5000/";
axios.defaults.headers = { "X-Custom-Header": "fresnel" };
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
