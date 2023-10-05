import { Routes, Route } from 'react-router-dom';
import { Cart, Home, NoPage, Order, SignUp, Login, ProductInfo, Dashboard, AddProduct, UpdateProduct } from "./pages";
import { Admin, User } from './components';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<User><Order /></User>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/productinfo/:id" element={<ProductInfo />} />
      <Route path="/addProduct" element={<Admin><AddProduct /></Admin>} />
      <Route path="/updateProduct" element={<Admin><UpdateProduct /></Admin>} />
      <Route path="/*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
