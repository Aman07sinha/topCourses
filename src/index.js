import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./App1";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App1 />
    <ToastContainer />
  </div>
);
