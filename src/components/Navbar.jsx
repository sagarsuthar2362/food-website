import React, { useContext } from "react";
import { IoRestaurantSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  let { input, setInput, setShowCart } = useContext(dataContext);

  const items = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="flex items-center justify-between shadow-xl py-3 px-8 bg-white">
        <IoRestaurantSharp className="text-3xl" />

        <div
          id="searchbox"
          className="flex items-center border rounded-lg md:w-6/12 w-8/12 overflow-hidden   "
        >
          <input
            type="text"
            placeholder="search item"
            className="border-none outline-none p-2 md:flex-1 w-10/12"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <CiSearch className="text-2xl w-10 h-full p-1 bg-slate-100 cursor-pointer" />
        </div>

        <div id="cart" className="relative">
          <FaShoppingCart
            className="text-3xl"
            onClick={() => setShowCart(true)}
          />
          <span className="absolute -top-2 -right-5 bg-green-400 w-5 h-5 rounded-full flex items-center justify-center">
          {items.length}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
