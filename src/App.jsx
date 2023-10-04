import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Home, NoPage, Order, SignUp, Login, ProductInfo, Dashboard, AddProduct, UpdateProduct } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/updateProduct" element={<UpdateProduct />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>e
    </BrowserRouter>
  );
};

export default App;
