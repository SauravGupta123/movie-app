import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/MovieSearch';
import About from './Pages/MovieDetails';
import MovieSearch from './Pages/MovieSearch';
import MovieDetails from './Pages/MovieDetails';
import SearchHistory from './Pages/SearchHistory';

const App = () => {
  const [history, setHistory]= useState([]);

  return (
   <Router>
    <div className='min-h-screen bg-gray-100 text-white p-5'>
    <Routes>
      <Route path="/" element={<MovieSearch history={history} setHistory={setHistory}/>} /> 
      <Route path="/details/:id" element={<MovieDetails/>} />
      <Route path="/history" element={<SearchHistory history={history} setHistory={setHistory}/>} />
    </Routes>
    </div>
   </Router>

  )
}

export default App
