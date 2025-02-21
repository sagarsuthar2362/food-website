import React, { createContext, useState } from "react";
import foodData from "../assets/foodData";

export const dataContext = createContext();

const UserContext = ({ children }) => {
  let [input, setInput] = useState("");
  let [cate, setCate] = useState(foodData);
  let [showCart, setShowCart] = useState(false);

  let data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default UserContext;
