import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';


  
function App() {
const [movies,setMovie] = useState([
  {
  
    id: 1,
    
    title: "Avatar 1",
    
    rating: 4,
    
    img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
    
    },
    
    // {
    
    // id: 2,
    
    // title: "Kunfu panda",
    
    // rating: 5,
    
    // img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    
    // },
    
    // {
    
    // id: 3,
    
    // title: "Naruto",
    
    // rating: 5,
    
    // img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
    
    // },
    
    // {
    
    // id: 4,
    
    // title: "Hobbit",
    
    // rating: 5,
    
    // img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
    
    // },
])

const newAddMovie = (movie) => {
  // console.log(movie);
 const exchangeMovie = [...movies]
 exchangeMovie.push(movie)
 setMovie(exchangeMovie)
}

  return (
    <div> 
      <Header addMovie={newAddMovie}/>
      <Main MoviesItem={movies} setMovie={setMovie}/>
    </div>
  );
}

export default App;
