import React from 'react'
import { Link } from 'react-router-dom';

const SearchHistory = ({history}) => {
    console.log(history);
  return (
    <div className='max-w-2xl mx-auto bg-gray-800 p-5 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-3.5 shadow-2xl' >Search History</h1>
        <ul className='text-gray-400'>
            {history?.map((item, index) => (
            <li
                className='bg-gray-700 p-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-600'
            key={index}>
                {item.query} - {new Date(item.timestamp).toLocaleString()}
            </li>
            ))}
        </ul>
        <Link to="/">Back to Search</Link>  
    </div>
  )
}

export default SearchHistory
