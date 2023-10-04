import React, { useContext } from "react";
import {
  Filter,
  HeroSection,
  Layout,
  ProductCard,
  Track,
} from "../../components";
const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
    </Layout>
  );
};

export default Home;
