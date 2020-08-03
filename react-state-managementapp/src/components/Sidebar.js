import React, { Component } from 'react'
import {MovieContext} from "./MovieContext";

class Sidebar extends Component {

    static contextType = MovieContext;

    render() {
        const [movies, setMovies] = this.context;
        console.log(movies);
        //  const movie = movies[0].name;
        return (
            <div>
                Movies : {movies.length}   <br/>
                menu
                <hr/>
            </div>
        )
    }
}

export default Sidebar