import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Movielist from './components/MovieList';
import {MovieProvider} from "./components/MovieContext";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MovieProvider>
                    <Sidebar/>
                    <Movielist/>
                </MovieProvider>
            </header>
    </div>
);
}

export default App;
