import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res1 = await fetch(
        "https://www.omdbapi.com/?i=tt3896198&apikey=9e292ee9"
      );
      const res2 = await fetch(
        "https://www.omdbapi.com/?t=interstellar&apikey=9e292ee9"
      );
      const res3 = await fetch(
        "https://www.omdbapi.com/?t=Lord%20of%20the%20rings&apikey=9e292ee9"
      );
      const res1Json = await res1.json();
      const res2Json = await res2.json();
      const res3Json = await res3.json();
      const jsonData = [res1Json, res2Json, res3Json];
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  localStorage.setItem("movies", JSON.stringify(data));
  return (
    <>
      <Navbar />

      {loading ? (
        <p className="text-neutral-50">loading....</p>
      ) : error ? (
        <p>error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-4 p-10">
          {data.map((movie, index) => {
            return (
              <MovieCard
                key={index}
                title={movie.Title}
                posterUrl={movie.Poster}
                released={movie.Released}
                loading={loading}
                id={movie.imdbID}
                error={error}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
