import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/CounterSlice";

const EventDetails = ({ id }) => {
  const count = useSelector((state) => state.counter.count);
  localStorage.setItem("data", count.toString());
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col bg-[#1C1C24] w-[400px] mr-5 p-5">
      <div className=" items-center justify-start">
        <h1 className="text-white text-2xl font-medium">Event Details</h1>
        <hr className="border-gray-700 w-[350px] h-[1px] mt-6" />
      </div>
      {/* data and time */}
      <div className="flex flex-row items-center justify-start mt-6 gap-3">
        <MdOutlineDateRange className="h-6 w-6 text-white" />
        <div className="flex flex-col ">
          <p className="text-gray-400">Data and Time</p>
          <h2 className="text-white">Sat, Dec 5 ,2023 11:30 AM</h2>
        </div>
      </div>
      <hr className="border-gray-700 w-[350px] h-[1px] mt-6" />
      {/* Location */}
      <div className="flex flex-row items-center justify-start mt-6 gap-6">
        <CiLocationOn className="h-6 w-6 text-white" />
        <div className="flex flex-col">
          <p className="text-gray-400">Location</p>
          <h2 className="text-white">Kathmandu, Nepal</h2>

          <span className="text-red-700 mt-2">View on Map</span>
        </div>
      </div>
      <hr className="border-gray-700 w-[350px] h-[1px] mt-6" />
      {/* selected tickets */}
      <div className="mt-6">
        <h1 className="text-white text-2xl font-medium">Select tickets</h1>
        <div className="flex flex-row items-center justify-between p-3">
          <div className=" justify-start items-center">
            <p className="text-gray-400">1x Ticket(s)</p>
            <h1 className="text-white text-lg">USD $500.00</h1>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FiMinus
              onClick={() => dispatch(decrement())}
              className="w-4 h-4 bg-gray-600 rounded-sm cursor-pointer"
            />
            <span className="text-white text-lg">{count}</span>
            <IoAddSharp
              onClick={() => dispatch(increment())}
              className="w-4 h-4 bg-red-500 rounded-sm cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* checkout button */}
      <div className="mt-6">
        <Link to={`/checkout/${id}`}>
          <button className="bg-red-600 w-full p-3 text-white rounded-md">
            {`Check out for $${count * 500.0}`}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
