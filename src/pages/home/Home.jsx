import React, { useContext } from "react";
import {
  Filter,
  HeroSection,
  Layout,
  ProductCard,
  Track,
  Testimonial,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../redux/cartSlice";
const Home = () => {
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch();
  console.log(cartItems)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(removeToCart("shirt"));
  }
  return (
    <Layout>
      <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={() => addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={() => deleteCart()}>del</button>
      </div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
