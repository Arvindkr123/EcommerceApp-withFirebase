import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import React, { useContext } from "react";
import { Cart, Home, NoPage, Order, SignUp, Login } from "./pages";
import MyContext from "./context/myContext";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
