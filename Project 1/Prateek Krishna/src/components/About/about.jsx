import React from "react";
import "./about.css";
import pic from "./hero.jpg";

function About(){
    return(
        <div id="aboutPage" className="about">
            <img className="hero-pic" src={pic} alt="hero"/>
            <div className="hero-about">
                <h2 id="about-me-dark" className="about-me-title about-me-title-dark">About Me</h2>
                <hr className="hrule" />
                <div className="about-card">
                    <p id="about-content">Nulla vitae imperdiet turpis. Pellentesque sed placerat nunc. Aliquam diam justo, rutrum vitae odio ut, maximus vulputate tortor. Proin sagittis dignissim quam eget mattis. Integer imperdiet eleifend neque. In faucibus magna non risus egestas, 
                        tempus tincidunt nunc auctor. Phasellus bibendum felis quam, non rutrum tellus ullamcorper id. Cras vehicula, eros a egestas ornare, erat ligula condimentum magna, eu rutrum nibh nisi ut felis. Nunc vehicula dui sed mauris finibus iaculis. Mauris
                         convallis sodales cursus. Curabitur egestas neque vitae magna mattis, eu ullamcorper velit bibendum. Sed eget nisi at orci convallis laoreet. Morbi quis venenatis dui. Nullam quis urna mollis, ultrices eros quis, rhoncus orci.
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default About;