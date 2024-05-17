import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie';
import PaginationComponent from './Pagination';
const MoviesList = ({movies, getPage, pageCount}) => {
  return (
    <Row className='mt-3'>
      {
        movies.length >=1 ? (movies.map((mov)=>{
          return(<CardMovie key={mov.id} mov={mov}/>)
        })):<h2>no movies</h2>
      }
      {movies.length >=1 ? (<PaginationComponent getPage={getPage} pageCount={pageCount}/>):<h2>no movies</h2>} 
    </Row>
  )
}

export default MoviesList
