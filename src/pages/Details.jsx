import React from 'react'
import Navbar from '../components/Navbar'
import MovieCard from '../components/MovieCard'
import EventDetails from "../components/EventDetails"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
  const{id}=useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=9e292ee9`);
    const jsonData=await res.json()
      setData(jsonData);
    } catch (error) {
        console.log(error)
    }
  };
  return (<>
  <Navbar/>
    <div className='flex flex-row justify-between p-20'>
        <MovieCard title={data.Title}
                posterUrl={data.Poster}
                released={data.Released}/>
        <EventDetails/>
    </div>
  </>
    
  )
}

export default Details