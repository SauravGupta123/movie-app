import React, { use, useState,useEffect } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
const apiKey= import.meta.env.VITE_PUBLIC_API_KEY
const MovieSearch = ({history, setHistory}) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies]= useState([]);
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate();

useEffect(() => {
  if(query.length > 2){
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data.Response=== "True"){
        setMovies(data.Search);

      }
    })
  }
}, [query]);

const handleMovieClick = (movie) => {
  setHistory([...history, {query,  timestamp: new Date().toISOString()}]);
  navigate(`/details/${movie.imdbID}`);
}

  return (
    <div className=' max-w-2xl mx-auto bg-gray-800 p-5 rounded-lg shadow-lg'>
      <h1 className='text-4xl font-bold mb-4'>Movie Search</h1>
      <input 
      className='w-full p-2 border border-gray-300 rounded-lg mb-4'
      type="text" placeholder="Search for a movie..."  value ={query} onChange={(e)=>setQuery(e.target.value)}/>

    <ul>
        {movies?.map((movie) =>
          <li 
          className='bg-gray-700 p-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-600 underline focus-within:'
          key= {movie.imdbId} onClick={()=>handleMovieClick(movie)} >
            {movie.Title} ({movie.Year})

          </li>
        )}

    </ul>
    <Link to= '/history'> View Search History</Link>
    </div>
  )
}

export default MovieSearch
