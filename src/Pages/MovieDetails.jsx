import React, { useEffect, useState } from 'react'
import { Link ,useParams} from 'react-router-dom';


const apiKey= import.meta.env.VITE_PUBLIC_API_KEY
const MovieDetails = () => {
  const {id}= useParams();
  const [movie, setMovie]= useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data.Response=== "True"){
        setMovie(data);
      }
    })
  }
  , [id]);

  if(!movie){
    return <div>Loading...</div>
  }


  return (
    <div className='max-w-2xl mx-auto bg-gray-800 p-5 rounded-lg shadow-lg'>
      <div className=' flex gap-3.5'>

      <h1 className='text-3xl font-bold mb-2'>{movie.Title}</h1>
      <span className='text-3xl text-gray-300'>{movie.Year}</span>
      </div>
     
      <img src={movie.Poster} alt={movie.Title} className='rounded-2xl shadow-amber-50' />
      <p className='mt-5'>{movie.Plot}</p>
      
      <Link to="/" 
        className='block mt-3 text-blue-300 hover:underline '
      >Back to Search</Link>
    </div>
  )
}

export default MovieDetails
