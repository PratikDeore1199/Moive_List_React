import { Movielist } from "./components/Movielist";
import { useState } from "react";
import {AddMovie} from "./components/AddMovieForm";

function App() {
  const [movies, setMovies]=useState([])
  return (
    <div>
        <AddMovie setMovies={setMovies} ></AddMovie> {/** set the movie state  */}
        <Movielist movies={movies}></Movielist> {/** using the movie state */}
    </div>
  );
}

export default App;
/**
 * movie card 
 * movie list
 * create movie form
 * 
 */