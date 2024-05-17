import {Container} from "react-bootstrap"
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
//import axios from'axios';
import { movies } from "./data";
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from "./components/MovieDetails";


function App() {

  const [moviesData, setMoviesData] = useState([movies])
  const [pageCount, setpageCount] = useState(0)

  //get all movies by axios 
  //const getAllMovies = async () => {
    //const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e5814c910dfc912a89cf6f829760a2cd&language=ar")
    //setMoviesData(res.data.results)
    //setpageCount(res.data.total_pages)
  //}

  //to search in api
  const search = async (word) => {
    //if (word === "") {
      //getAllMovies();
    //} else {
      //const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      //setMoviesData(res.data.results)
      //setpageCount(res.data.total_pages)
    //}
  }

  //get current page
  const getPage = async (page) => {
    //const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    //setMoviesData(res.data.results)
    //setpageCount(res.data.total_pages)
  }


  return (
    <div className="font color-body">
      <NavBar search={search}/>
      <Container>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviesList movies={movies} getPage={getPage} pageCount={pageCount}/>} />
          <Route path='/movie/:id' element={<MovieDetails movieID={':id'}/>} />
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
