import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
document.querySelector('#root').style.setProperty('content', 'none', 'important');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
