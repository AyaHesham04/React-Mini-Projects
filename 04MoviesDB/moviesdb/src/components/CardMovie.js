import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardMovie = ({mov}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
        <Link to={`/movie/${mov.id}`}>      
        <div className="card">
          <img src={mov.imgUrl} className="card__image" alt="movie image"/>
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Movie Title: {mov.title}</p>
              <p>Release Date: {mov.release_date}</p>
              <p>Vote Count: {mov.vote_count} </p>
              <p>Vote Average: {mov.vote_average} </p>
            </div>
          </div>
        </div>
        </Link>
    </Col >
  )
}

export default CardMovie
