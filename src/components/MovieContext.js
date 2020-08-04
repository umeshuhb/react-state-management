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
        name : "Cars",
        price : "150",
        id: 410
    },{
        name : "The Jungle Book",
        price : "185",
        id: 411
    },{
        name : "Lion King",
        price : "185",
        id: 412
    },
    {
        name : "Madagascar",
        price : "185",
        id: 413
    }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]} >
            {props.children}
        </MovieContext.Provider>
    )

}