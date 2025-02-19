import React, { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import { movies } from "../data"

//import axios from 'axios'


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  //get  movie by details 
  //const getMovieDetails = async () => {
  //    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
  //  setMovie(res.data)
  //}

  //useEffect(() => {
    //getMovieDetails();
  //}, [])

  
    useEffect(() => {
      const filteredMovie = movies.find(mov => mov.id === parseInt(id));
      if (filteredMovie) {
        setMovie(filteredMovie);
      }
    }, [id]);

  return (
  <div>
    <Row className="justify-content-center">
    <Col md="12" xs="12" sm="12" className="mt-4 ">
        <div className="card-detalis  d-flex align-items-center ">
            <img
                className="img-movie w-30"
                src={movie.imgUrl}
                alt={movie.title}
            />
            <div className="justify-content-center text-center  mx-auto">
                <p className="card-text-details border-bottom">
                    Movie Title: {movie.title}
                </p>
                <p className="card-text-details border-bottom">
                    Release Date: {movie.release_date}
                </p>
                <p className="card-text-details border-bottom">
                    Vote Count: {movie.vote_count}
                </p>
                <p className="card-text-details border-bottom">
                    Vote Average: {movie.vote_average}
                </p>
            </div>
        </div>
    </Col>
    </Row>

      <Row className="justify-content-center">
      <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
              <div className="text-end p-4 ">
                  <p className="card-text-title border-bottom">Overview: </p>
              </div>
              <div className="text-end px-2">
                  <p className="card-text-story">{movie.overview}</p>
              </div>
          </div>
      </Col>
      </Row>

      <Row className="justify-content-center">
      <Col md="10" xs="12" sm="12" className="mt-2 d-flex justify-content-center ">
          <Link to="/">
              <button style={{ backgroundColor: "#b45b35", border: "none" }} className="btn btn-primary mx-2">
                  Go to Home Page
              </button>
          </Link>
            <a href={movie.homepage} >
              <button style={{ backgroundColor: "#b45b35", border: "none" }} className="btn btn-primary">
                  Watch Movie
              </button>
            </a>
      </Col>
      </Row>
      
  </div>
  )
}


export default MovieDetails
