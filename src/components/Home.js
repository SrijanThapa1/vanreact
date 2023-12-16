import React from "react";
import {Link, link } from 'react-router-dom';

export default function Home(){
    return(
        <div className="home-container">
            <h1> you got the travel plans, we got the travels vans</h1>
            <p> add adventure to your life by joining the #vanlife movement,rent 
                the perfect van to make you perfect road trip.
            </p>
            <Link to='vans'> find your van</Link>
        </div>
    )
}