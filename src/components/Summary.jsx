import React from "react";
import { Link } from "react-router-dom";
const Summary = ({title , id}) => {
    let basket = JSON.parse(localStorage.getItem("data")) || [];
  const ticketPrice=basket * 500.00;
  const discount=0.03*basket*500;
  const tax=0.13* (ticketPrice-discount);
  const total=ticketPrice-discount+tax;
  localStorage.setItem("ticketData", JSON.stringify(total));
  return (
    <>
      <div className=" bg-[#1C1C24] w-[400px] mr-5 p-5 border-2 border-gray-700 rounded-xl">
        <div className=" items-center justify-start">
          <h1 className="text-white text-3xl font-medium">Checkout Summary</h1>
          <hr className="border-gray-700 w-[350px] h-[1px] mt-6" />
        </div>
        {/* movie title */}
        <div className="mt-6">
          <h1 className="text-white text-2xl font-medium">
            {title}
          </h1>
          <div className="flex flex-row items-center justify-start text-gray-500">
            <p>Movie</p>
            <div className="w-[6px] h-[6px] bg-gray-500 rounded-full m-3"></div>
            <p>Kathmandu, Nepal</p>
          </div>
          <hr className="border-gray-700 w-[350px] h-[1px] mt-6" />
        </div>
        {/* expenses */}
        <div className="mt-6 flex flex-row justify-between">
          <div className="flex flex-col text-gray-500 text-lg gap-3">
            <p>Normal</p>
            <p>Sub Total</p>
            <p>Tax(13%)</p>
            <p>Discout(5%)</p>
          </div>
          <div className="text-neutral-50 text-lg">
            <p>*{basket!==0? basket: 0}</p>
          </div>
          <div className="flex flex-col gap-3 text-lg text-neutral-50">
            <p>$500.00</p>
            <p>${ticketPrice}</p>
            <p>${tax}</p>
            <p>${discount}</p>
          </div>
        </div>
        <hr className="border-gray-700 w-[350px] h-[1px] mt-6" />
        {/* total */}
        <div className="mt-6 flex flex-row justify-between items-center">
          <p className="text-gray-500 text-lg">Total</p>
          <div className="flex flex-row items-center gap-2">
            <p className="text-gray-500">USD</p>
            <p className="text-2xl text-neutral-50">{total}</p>
          </div>
        </div>
        <hr className="border-gray-700 w-[350px] h-[1px] mt-6" />
        {/* confirm button */}
        <div className="mt-6">
          <Link to={`/ticket/${id}`}>
          <button  className="bg-red-600 w-full p-3 text-white rounded-md">
            Confirm & Pay
          </button></Link>
         
        </div>
      </div>
    </>
  );
};

export default Summary;
