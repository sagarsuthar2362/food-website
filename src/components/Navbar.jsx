import React, { useContext } from "react";
import { IoRestaurantSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { dataContext } from "../context/UserContext";

const Navbar = () => {
  let { input, setInput, setShowCart } = useContext(dataContext);
  const items = useSelector((state) => state.cart);

  return (
    <nav className="flex items-center justify-between shadow-md py-4 px-6 md:px-12 bg-white sticky top-0 left-0 w-full">
      {/* Logo */}
      <div className="flex items-center gap-2 text-green-600">
        <IoRestaurantSharp className="text-4xl " />
        <span className="font-bold text-2xl tracking-wide md:block hidden">SwadWagon</span>
      </div>

      {/* Search Box */}
      <div className="relative flex items-center w-7/12 md:w-5/12">
        <input
          type="text"
          placeholder="Search for delicious food..."
          className="w-full py-2 px-4 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none shadow-sm transition-all"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <CiSearch className="absolute left-3 text-xl text-gray-500 cursor-pointer" />
      </div>

      {/* Cart */}
      <div id="cart" className="relative">
        <FaShoppingCart
          className="text-3xl text-gray-700 cursor-pointer transition-transform transform hover:scale-110"
          onClick={() => setShowCart(true)}
        />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full shadow-md">
            {items.length}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
