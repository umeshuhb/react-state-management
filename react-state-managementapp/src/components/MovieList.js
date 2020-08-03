import React, {useState, useContext} from 'react';
import '../MovieList.css';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const Movielist = ()=>{

    const [movies,setMovies] = useContext(MovieContext);

    return(
        <div className="MovieList">
        {movies.map( movie => (
        <Movie movie={movie} key={movie.id}/>
))}
</div>
);
};

export default Movielist;