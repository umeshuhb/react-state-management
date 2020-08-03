import React, {useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const Movielist = ()=>{

    const [movies,setMovies] = useContext(MovieContext);

    return(
        <div>
        {movies.map( movie => (
        <Movie movie={movie} key={movie.id}/>
))}
</div>
);
};

export default Movielist;