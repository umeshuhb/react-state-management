import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props =>{
    const [movies, setMovies] = useState([{
        name : "Toy Story",
        price : "150",
        id : 123
    },{
        name : "Bug's Life",
        price : "125",
        id : 456
    },{
        name : "Alladin",
        price : "175",
        id: 410
    }]);

    return (
        <MovieContext.Provider value={[movies, setMovies]} >
            {props.children}
        </MovieContext.Provider>
    )

}