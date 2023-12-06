import React from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import EventDetails from "../components/EventDetails";
import { useParams } from "react-router-dom";

const Details = () => {
  let moviesData = JSON.parse(localStorage.getItem("movies")) || [];
  const { id } = useParams();
  const slectedMovie = moviesData.filter((x) => x.imdbID === id);
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between p-20">
        <MovieCard title={slectedMovie[0].Title}
                posterUrl={slectedMovie[0].Poster}
                released={slectedMovie[0].Released}/>
        <EventDetails id={slectedMovie[0].imdbID}/>
      </div>
    </>
  );
};

export default Details;
