import React, { useContext } from "react";
import { HeroSection, Layout } from "../../components";
import MyContext from "../../context/myContext";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default Home;
