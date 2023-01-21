import React from "react";
import { AiOutlineStar } from "react-icons/ai";

function HouseItem({}) {
  return (
    <div className="text-white m-2 mb-10 ">
      <div className="h-52 w-64 bg-slate-600 rounded-lg"></div>
      <div className="flex flex-col ">
        <div className="flex justify-between">
          <h1 className="font-bold">Beach, Indonesia</h1>
          <div className="flex flex-col ">
            <div className="flex justify-between">
              <AiOutlineStar className="mr-1 my-1" size="20" />
              <p className="my-1">4.4</p>
            </div>
          </div>
        </div>
      </div>
      <h3>Rp5,700,000 night</h3>
    </div>
  );
}

export default HouseItem;
