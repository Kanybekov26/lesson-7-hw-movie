import React from 'react'
import { MovieItem } from '../MovieItem/Movie'

const Main = ({MoviesItem, setMovie}) => {
  return (
    <div>
        <MovieItem
       MoviesItem={MoviesItem} 
       setMovie={setMovie}
        />
    </div>
  )
}

export default Main