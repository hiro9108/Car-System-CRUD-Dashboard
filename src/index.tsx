import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/rootStore";
import { AnimatePresence } from "framer-motion";
import "animate.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <App />
      </AnimatePresence>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
