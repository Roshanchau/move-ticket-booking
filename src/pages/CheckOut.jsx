import React from "react";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Summary from "../components/Summary";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { id } = useParams();
  let moviesData = JSON.parse(localStorage.getItem("movies")) || [];

  const selectedMovie = moviesData.filter((x) => x.imdbID === id);

  return (
    <>
      <Navbar />
      <div className="p-10">
        <div>
          <h1 className="text-white text-2xl font-medium">
            Order Confirmation
          </h1>
          <hr className="border-gray-700 mt-6" />
        </div>
        <div className="flex flex-row gap-8 mt-12 justify-between  p-10">
          <Info />
          <Summary
            title={selectedMovie[0].Title}
            id={selectedMovie[0].imdbID}
          />
        </div>
      </div>
    </>
  );
};

export default CheckOut;
