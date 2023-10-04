import React, { useContext } from "react";
import MyContext from "../../context/myContext";
import Card from "./Card";

const ProductCard = () => {
  const { mode } = useContext(MyContext);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "black" : "" }}
          >
            Our Latest Collection
          </h1>
          <div class="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        {/* Cards starts here */}
        <div className="flex flex-wrap -m-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
