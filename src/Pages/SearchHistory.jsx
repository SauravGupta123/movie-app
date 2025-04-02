import React from 'react'
import { Link } from 'react-router-dom'

const SearchHistory = ({ history }) => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-10 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Search History</h1>

      {history && history.length > 0 ? (
        <ul className="space-y-4">
          {history.map((item, index) => (
            <li
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
            >
              <p className="text-lg">
                <span className="font-semibold text-blue-400">Query:</span> {item.query}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Searched on:</span>{' '}
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-400 mt-4">No search history available.</div>
      )}

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

export default SearchHistory
