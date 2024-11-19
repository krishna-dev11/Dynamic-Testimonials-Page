import React, { useState } from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
 return(
  <div className="flex flex-col justify-center items-center h-screen bg-gray-200 ">
  <div className="flex flex-col justify-center items-center ml-[4rem]">
  <div className="text-[2rem] font-semibold">OUR Testimonials</div>
  <div className="h-[.2rem] w-[10rem] bg-red-400"></div>
  </div>
    <Testimonials reviews={reviews}/>
  </div>
 );
};

export default App;
