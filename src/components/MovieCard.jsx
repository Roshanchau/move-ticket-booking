import React, { useState } from "react";
import { Link } from "react-router-dom";
function MovieCard({ title, posterUrl, released , id }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(true);
  };
  const changeShow = () => {
    setShow(false);
  };

 
  return (
    <>
      <div className="flex flex-col items-center justify-center transition-all ease-in-out">
        <div className="flex-col items-center justify-center ">
          {/* poster */}
          <div className="relative">
            <img
              onMouseOver={toggleShow}
              onMouseLeave={changeShow}
              className={`w-[286px] h-[320px] rounded-lg object-cover ${
                show ? "opacity-50" : "opciaty:100"
              } `}
              src={posterUrl}
              alt="poster"
            />
            {show && (
              <Link to={`/details/${id}`}>
                <button className="bg-red-600 absolute top-1/2 left-1/3 px-3 py-2 rounded-md text-neutral-50" onMouseOver={toggleShow}>
                  Get tickets
                </button>
              </Link>
            )}
          </div>
          {/*Title  */}
          <div className="mt-[24px] w-[80%]">
            <h2 className="leading-7 text-neutral-50 text-xl font-normal">
              {title}
            </h2>
          </div>
          {/* address and date */}
          <div className="flex flex-row text-neutral-50 items-center text-sm font-light">
            <p>{released}</p>
            <div className="w-[6px] h-[6px] bg-neutral-50 rounded-full m-3"></div>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
