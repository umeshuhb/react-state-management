import React, { Component } from 'react'
import {MovieContext} from "./MovieContext";

class Sidebar extends Component {

    static contextType = MovieContext;

    render() {
        const [movies, setMovies] = this.context;
        return (
            <div>
                Movies : {movies.length}   <br/>
            </div>
        )
    }
}

export default Sidebar