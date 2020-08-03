import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Movielist from './components/MovieList';
import {MovieProvider} from "./components/MovieContext";
import AddMovie from './components/AddMovie';

function App() {
    return (
        <div className="App">
            <MovieProvider>
                <header className="App-header">
                        <Sidebar/>
                </header>
                <AddMovie />
                <Movielist/>
            </MovieProvider>
    </div>
);
}

export default App;
