import React from 'react';

const Movie = (props)=>{

    const movie = props.movie;
    return(
        <li>{movie.name} <span>(${movie.price})</span></li>
    )

}
export default Movie;