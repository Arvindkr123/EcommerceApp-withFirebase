import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyState from "./context/myState.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyState>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </MyState>
    </Provider>
  </React.StrictMode>
);
