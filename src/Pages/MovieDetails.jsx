import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const apiKey = import.meta.env.VITE_PUBLIC_API_KEY
const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.Response === 'True') {
          setMovie(data)
        }
      })
  }, [id])

  if (!movie) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center text-white text-2xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-10 text-white">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-lg shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{movie.Title}</h1>
          <p className="text-lg text-gray-400 mb-2">
            <span className="font-semibold">Year:</span> {movie.Year}
          </p>
          <p className="text-lg text-gray-400 mb-2">
            <span className="font-semibold">Genre:</span> {movie.Genre}
          </p>
          <p className="text-lg text-gray-400 mb-2">
            <span className="font-semibold">Director:</span> {movie.Director}
          </p>
          <p className="text-lg text-gray-400 mb-2">
            <span className="font-semibold">Actors:</span> {movie.Actors}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Plot</h2>
        <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Back to Search
        </Link>
      </div>
    </div>
  )
}

export default MovieDetails
