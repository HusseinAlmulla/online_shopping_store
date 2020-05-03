import React from 'react'
import header from './header.jpg';
import './Cover.css';



function Cover() {
    return (
        <div className="hero-image" >
                        <img className= "coverWidth" src={header} alt="Smiley face"/>

            <h1> Welcome to our store</h1>

            <button>Hire me</button>
       </div>

    )
}

export default Cover;

