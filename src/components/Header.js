import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className="header bg-white z-50 shadow px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between fixed top-0 left-0 right-0">
      <div className="logo w-48 p-2">
        <Link to="/">
          <img src={logo} alt="logo" className="min-h-14" />
        </Link>
      </div>
      <nav className="hidden sm:block md:block">
        <ul className="flex gap-6 items-center text-sm font-semibold">
          <li className="">
            <Link to="/men">MEN</Link>
          </li>
          <li className="">
            <Link to="/woman">WOMEN</Link>
          </li>
          <li>
            <Link to="/beauty">BEAUTY</Link>
          </li>
          <li className="">
            <Link to="/electronics">ELECTRONICS</Link>
          </li>
          {/* <li className="">
            <Link to="/login">HOME AND KITCHEN</Link>
          </li> */}
          <div className="search flex items-center justify-center">
            <div className="relative">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search Your Vibe..."
                className="border outline-none rounded-3xl pl-4 py-1 border-black"
              />
              <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
            </div>
          </div>
        </ul>
      </nav>
      <div className="hidden sm:flex md:flex lg:flex profile gap-1 sm:gap-2 items-center">
        <Link to="/profile">
        <CgProfile className="text-3xl cursor-pointer" />
        </Link>
        <Link to="/favourites">
          <GoHeart className="text-3xl cursor-pointer" />
        </Link>
        <Link to="/cart">
          <BsCart3 className="text-3xl cursor-pointer" />
        </Link>
      </div>
        <div className="text-4xl sm:hidden md:hidden lg:hidden">
        <GiHamburgerMenu/>
        </div>
    </div>
  );
}

export default Header;
