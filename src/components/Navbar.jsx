import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" px-[100px] py-[10px] bg-neutral-800">
        <div className="flex flex-row justify-between items-center">
          {/* logo+routes */}
          <div className="flex flex-row items-center gap-[80px]">
            {/* logo */}
              <Link to="/">
              <div  className="flex cursor-pointer flex-row items-center gap-2">
              <img
                className="w-[30px] h-[25.98px]"
                src="/images/airplane.svg"
                alt="ticketlogo"
              />
              <p className="text-neutral-50 text-2xl font-semibold">
                TickTicketing
              </p>
            </div>
              </Link>
            
            {/* links */}
            <div className="flex flex-row items-center justify-center">
              <ul
                className="flex flex-row items-center 
                  gap-[32px]
                text-neutral-50
                  font-light
                  cursor-pointer
                "
              >
                <li>Home</li>
                <li>Concerts</li>
                <li>Movies</li>
                <li>Theater Events</li>
              </ul>
            </div>
          </div>
          {/* login & register */}
          <div className="flex flex-row items-center justify-center gap-[16px]">
            <button className="rounded-md text-sm px-[12px] py-[8px] text-neutral-50">
              Login
            </button>
            <button className="rounded-md bg-red-700 text-sm px-[12px] py-[8px] text-neutral-50">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
