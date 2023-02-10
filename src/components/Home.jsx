import React from "react";
import '../App.css';


const Home = () => {
    return (
    <header>
        <a href="#home" className="logo">Julien</a>
        <ul className="navigation">
            <li><a href="#Project">Project</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul> 
   </header>
    );
};

export default Home;