import { style } from "@mui/system";
import React, { useState } from "react";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Wishlist from "../icons/Wishlist";
import User from "../icons/User";
import ShoppingBag from "../icons/ShoppingBag";


const Mainheader = () => {

  return (
    <div>
      <nav className="dark:bg-white-900">
        <div className="flex flex-row" style={{ height: "130px" }}>
          <a href="" className="flex items-center" style={{ height: "125px" }}>
            <img
              src="images/logo.png"
              className="mr-3 h-6 sm:h-9 flex flex-row"
              style={{ width: "250px", height: "40px" }}
            />
          </a>

          <form>
            <div
              className="relative"
              style={{
                marginRight: "570px",
                width: "450px",
                marginTop: "35px",
              }}
            >
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-black-900 bg-white-50 rounded-r-lg border-l-red-50 border-l-2 border border-red-300 focus:ring-red-500 focus:border-red-500 dark:bg-white-700 dark:border-1-red-900  dark:border-red-600 dark:placeholder-black dark:text-black dark:focus:border-red-500"
                placeholder="Search for a product or brand"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-700 rounded-r-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex flex-row mb-5" style={{ marginLeft: "850px" }}>
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                  <a
                    href="#"
                    className="dark:text-black flex flex-row"
                    style={{ border: "round" }}
                  >
                    <User />
                    sign In
                  </a>
                </li>
                <li>
                  <a href="#" className="dark:text-black flex flex-row ">
                    <Wishlist />
                    wishList
                  </a>
                </li>
                <li>
                  <a href="#" className="dark:text-black flex flew-row">
                    <ShoppingBag />
                    Your Cart : 0.00
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>

      <nav className="dark:bg-red-700 ">
        <div
          className="py-3 px-4 mx-auto max-w-screen-xl  md:px-6"
          style={{ height: "50px" }}
        >
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a href="#" className="text-gray-900 dark:text-white m">
                  <ListOutlinedIcon></ListOutlinedIcon>HYPERMARKET
            
  
                </a>

              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Mainheader;
