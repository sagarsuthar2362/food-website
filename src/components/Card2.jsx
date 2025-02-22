import React, { useCallback, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { DecreaseQuantity, IncreaseQuantity, RemoveCart } from "../redux/cartSlice";
import { dataContext } from "../context/UserContext";


const Card2 = ({ image, name, price, id }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const item = cartItems.find((item) => item.id === id);

  return (
    <div className="h-[120px] p-4 flex justify-between shadow-xl rounded-lg border border-zinc-200">
      {/* left */}
      <div id="left" className=" w-8/12 h-full flex">
        <div className=" h-full md:w-4/12 w-6/12">
          <img src={image} className="h-full w-full object-cover" />
        </div>

        <div
          id="name_quantity"
          className="flex flex-col flex-1  items-center justify-start gap-5 "
        >
          <span className="font-bold text-sm">{name}</span>
          <div
            id="quantity"
            className="bg-white md:h-[50px] h-[35px] md:w-[130px] w-[80px] flex items-center rounded-lg overflow-hidden border border-zinc-500"
          >
            <button
              className="bg-slate-200 md:w-[30%] w-[35%] h-full flex items-center justify-center text-xl font-semibold cursor-pointer hover:bg-slate-300"
              onClick={() =>  item.count > 1 ? dispatch(DecreaseQuantity(id)) : '1' }
            >
              -
            </button>
            <span className="md:w-[60%] w-[30%]  text-center text-xl font-semibold">
              {item ? item.count : 1}
            </span>
            <button
              className="bg-slate-200 md:w-[30%] w-[35%] h-full flex items-center justify-center text-xl font-semibold cursor-pointer hover:bg-slate-300"
              onClick={() => dispatch(IncreaseQuantity(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* right */}
      <div id="right" className="text-center">
        <div id="price" className="space-y-4">
          <div>Rs {price}/-</div>
          <button
            className="text-3xl cursor-pointer text-red-500"
            onClick={() => dispatch(RemoveCart(id))}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card2;
