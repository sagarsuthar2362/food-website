import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import categories from "../assets/Category";
import Card from "../components/Card";
import foodData from "../assets/foodData";
import { dataContext } from "../context/UserContext";

const Home = () => {
  let { cate, setCate, input, setInput } = useContext(dataContext);

  const filterByCategory = (category) => {
    if (category === "All") {
      setCate(foodData);
    } else {
      const filteredData = foodData.filter(
        (food) => food.food_category === category
      );
      setCate(filteredData);
    }
  };

  useEffect(() => {
    setCate(
      foodData.filter((item) => item.food_name.toLowerCase().includes(input))
    );
  }, [input]);

  return (
    <div>
      <Navbar />

      <div
        id="categories"
        className="flex justify-center flex-wrap md:p-8 p-3 md:mx-auto  gap-5"
      >
        {categories.map((item) => (
          <div
            className="bg-white md:w-[200px] md:h-[200px] h-[100px] w-[100px] flex flex-col gap-3 items-center justify-center rounded-md cursor-pointer hover:bg-green-100"
            onClick={() => filterByCategory(item.name)}
            key={item.id}
          >
            {item.icon}
            <span className="font-semibold md:text-xl text-sm">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <div
        id="cards"
        className="py-10 w-10/12 mx-auto flex flex-wrap gap-8  justify-center"
      >
        {cate.map((food) => {
          const {
            id,
            food_name,
            food_category,
            food_type,
            food_quantity,
            food_image,
            price,
          } = food;

          return (
            <Card
              key={id}
              food_name={food_name}
              food_category={food_category}
              food_type={food_type}
              food_quantity={food_quantity}
              food_image={food_image}
              price={price}
            />
          );
        })}
      </div>

      {/* this is just written to show that after using usercontext we can get data  */}
      {/* <h1>usercontext: {input.length > 0 ? input : "No input"}</h1> */}
    </div>
  );
};

export default Home;
