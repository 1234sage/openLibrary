import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog";
import About from "./About";
import "./App.css";

const App = () => {
    return(
        <Router>
            <div className = "navbar">
                <h2>Библиотека</h2>
                <nav>
                    <Link to = "/">Главная</Link>
                    <Link to = "/catalog">Каталог</Link>
                    <Link to = "/about">О нас</Link>
                </nav>
            </div>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/catalog" element = {<Catalog/>}/>
                <Route path = "/about" element = {<About/>}/>
            </Routes>

        </Router>
    )
}
export default App;