import React from "react";
import {
  Filter,
  HeroSection,
  Layout,
  ProductCard,
  Track,
  Testimonial,
} from "../../components";
const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
