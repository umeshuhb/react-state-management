import React, {useContext, useState} from 'react';
import {MovieContext} from "./MovieContext";

const AddMovie = ()=>{

    const [movies, setMovies] = useContext(MovieContext);
    const [movieName, setMovieName] = useState('');
    const [moviePrice, setMoviePrice] = useState('');

    const addMovies = (e)=> {
        e.preventDefault();
        if(movieName.trim() !== "" && moviePrice.trim() !== "" ) {
            setMovies((prevMovies) => [...prevMovies, {name: movieName, price: moviePrice, id: (movies.length + 1)}]);
            setMovieName('');
            setMoviePrice('');
        }
    };

    return(
        <form onSubmit={addMovies}>
            <input type="text" name="movieName" value={movieName} onChange={ (e)=> setMovieName(e.target.value) } placeholder="Movie Name" />
            <input type="number" name="price" value={moviePrice} onChange={(e)=> setMoviePrice(e.target.value)} placeholder="Movie Price" />
            <input type="submit" />
        </form>
    )

};

export default AddMovie;