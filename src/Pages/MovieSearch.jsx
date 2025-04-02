import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const apiKey = import.meta.env.VITE_PUBLIC_API_KEY

const MovieSearch = ({ history, setHistory }) => {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true)
      fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.Response === "True") {
            setMovies(data.Search)
          } else {
            setMovies([])
          }
          setLoading(false)
        })
    } else {
      setMovies([])
    }
  }, [query])

  const handleMovieClick = (movie) => {
    setHistory([...history, { query, timestamp: new Date().toISOString() }])
    navigate(`/details/${movie.imdbID}`)
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-10 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Movie Search</h1>
      <input
        className="w-full p-3 border border-gray-600 rounded-lg mb-6 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? (
        <div className="text-center text-gray-400">Loading...</div>
      ) : (
        <ul className="space-y-3">
          {movies?.map((movie) => (
            <li
              className="bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300"
              key={movie.imdbID}
              onClick={() => handleMovieClick(movie)}
            >
              <span className="font-semibold">{movie.Title}</span> ({movie.Year})
            </li>
          ))}
        </ul>
      )}

      {movies.length === 0 && query.length > 2 && !loading && (
        <div className="text-center text-gray-400 mt-4">No movies found.</div>
      )}

      <div className="mt-6 text-center">
        <Link
          to="/history"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          View Search History
        </Link>
      </div>
    </div>
  )
}

export default MovieSearch
