import React, { useState } from "react";
import Products from "../Products/Products";
import Filters from "../Filters/Filters";
import HomeTitle from "../HomeTitle/HomeTitle";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div className="App">
    
      <Navbar />
      <HomeTitle />
      <div className=" mt-12 w-full flex flex-col items-center">
        <Filters />
      </div>
      <div className="  mt-12 w-full flex flex-col items-center">
        <Products />
      </div>
    </div>
  );
}
