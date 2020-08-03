import React from 'react';

const Movie = (props)=>{

    const movie = props.movie;
    return(
        <li>{movie.name}</li>
    )

}
export default Movie;