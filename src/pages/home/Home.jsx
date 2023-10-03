import React, { useContext } from "react";
import { Layout } from "../../components";
import MyContext from "../../context/myContext";

const Home = () => {
  const { name } = useContext(MyContext);
  // console.log(context);
  return (
    <Layout>
      <h1 className="text-2xl">Name : {name}</h1>
    </Layout>
  );
};

export default Home;
