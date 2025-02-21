import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import categories from "../assets/Category";
import Card from "../components/Card";
import foodData from "../assets/foodData";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { TbAlignBoxLeftStretch } from "react-icons/tb";

const Home = () => {
  let { cate, setCate, input, setInput, showCart, setShowCart } =
    useContext(dataContext);

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
      foodData.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input]);

  // these are the items which was added to cart
  const items = useSelector((state) => state.cart);

  const subTotal = items.reduce((total, item) => total + item.price, 0);
  const deliveryFee = 20;
  const taxes = Math.round((subTotal * 0.6) / 100);
  const totalAmount = subTotal + deliveryFee + taxes;

  return (
    <div>
      <Navbar />

      {/* category */}
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

      {/* cards */}
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
              id={id}
            />
          );
        })}
      </div>

      {/* this is just written to show that after using usercontext we can get data  */}
      {/* <h1>usercontext: {input.length > 0 ? input : "No input"}</h1> */}

      {/* this is a cartpage or cartsidebar*/}
      {showCart && (
        <div
          className={`fixed top-0 right-0 md:w-[40vw] w-full h-screen bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
            showCart ? "translate-x-0" : "translate-x-full"
          } px-7 py-5`}
        >
          <div
            id="top"
            className="flex items-center justify-between text-green-500"
          >
            <span className="text-2xl">Order Items</span>
            <span
              className="text-4xl hover:text-zinc-800 cursor-pointer"
              onClick={() => setShowCart(false)}
            >
              <RxCross2 />
            </span>
          </div>

          <div id="cartcards" className="space-y-4 py-5">
            {items.map((product, index) => (
              <Card2
                image={product.food_image}
                name={product.food_name}
                price={product.price}
                id={product.id}
              />
            ))}
          </div>

          {items.length > 0 ? (
            <div className="bg-red-100 border-t-2">
              <div className="flex items-center justify-between p-2">
                <span>Subtotal</span>
                <span>{subTotal}/-</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <span>Delivery charges</span>
                <span>{deliveryFee}/-</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <span>taxes</span>
                <span>{taxes}/-</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <span>total amount</span>
                <span>{totalAmount}/-</span>
              </div>
            </div>
          ) : (
            <h1 className="text-center font-semibold text-xl text-gray-500">Your cart is empty</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
