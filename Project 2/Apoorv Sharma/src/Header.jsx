import React from "react";
import logo from "./film-reel.png"


const Header = () => {
    return(
    <div className="headera">
        <div className="header">
            <a href="./index" className="logolink">
                <img src={logo} alt="" className="logo"/>
                <h1>CinemaReel</h1>
            </a>
        </div>
    </div>
    )
}


export default Header