import React from "react";
import MyContext from "./myContext";

const MyState = ({ children }) => {
  const state = {
    name: "Arvind Kumar",
    class: "10 A",
  };
  const myColor = "red";
  return (
    <MyContext.Provider value={(state, myColor)}>{children}</MyContext.Provider>
  );
};

export default MyState;
