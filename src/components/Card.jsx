import React from "react";
import { IoLeafOutline } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddCart } from "../redux/cartSlice";

const Card = ({
  food_name,
  food_category,
  food_type,
  food_quantity,
  food_image,
  price,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className="h-[400px] w-[310px] bg-white rounded-xl shadow-xl p-4 space-y-2 hover:border border-green-300"
      key={id}
    >
      <div className="w-full h-8/12 ">
        <img
          src={food_image}
          alt=""
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-xl font-bold">{food_name}</h1>

      <div className="flex justify-between">
        <span className="font-semibold text-lg">Rs {price}/-</span>

        <div
          className="flex items-center gap-1 text-lg"
          style={{
            color: food_type === "veg" ? "green" : "red",
          }}
        >
          {food_type === "veg" ? <IoLeafOutline /> : <GiChickenOven />}
          <span>{food_type}</span>
        </div>
      </div>
      <button
        className="bg-green-200 w-full py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-300"
        onClick={() => dispatch(AddCart({ id, food_name, price, food_image }))}
      >
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
