import React from "react";
import "./projects.css"
import flutter from "./flutter.png"
import prateek from "./prateek.png"
import handpose from "./hand_crops.png"

function Projects(){
    return(
        <div id="ProjectsPage" className="projects">
            <h1 id="proj-heading" className="proj-heading">Projects</h1>
            <hr className="hrule-proj"/>
            <div className="project-space">
                <div id="proj-card-1" className="proj-card">
                    <div className="proj-img">
                        <img className="proj-pics" alt="flutter" src={flutter}></img>
                        <p className="proj-description">My Notes App</p>
                        <button id="proj-btn-1" onClick={(e)=>{e.preventDefault(); window.location.href = "https://github.com/PrateekKrishna/my-notes-flutter"}} className="proj-btn">GitHub</button>
                    </div>
                </div>
                <button onClick={(e)=>{e.preventDefault(); window.location.href = "https://github.com/PrateekKrishna/my-notes-flutter"}} className="phone-btn">GitHub</button>
                <div id="proj-card-2" className="proj-card">
                    <div className="proj-img">
                        <img className="proj-pics" alt="portfolio" src={prateek}></img>
                        <p className="proj-description">Portfolio Website Made With React</p>
                        <button id="proj-btn-2" onClick={(e)=>{e.preventDefault(); window.location.href = "https://github.com/PrateekKrishna/prateek-portfolio"}} className="proj-btn">GitHub</button>
                    </div>
                </div>
                <button onClick={(e)=>{e.preventDefault(); window.location.href = "https://github.com/PrateekKrishna/prateek-portfolio"}} className="phone-btn">GitHub</button>
                <div id="proj-card-3" className="proj-card">
                    <div className="proj-img">
                        <img className="proj-pics" alt="handpose" src={handpose}></img>
                        <p className="proj-description">Handpose Detection Model using OpenCV & Mediapipe</p>
                        <button id="proj-btn-3" onClick={(e)=>{e.preventDefault(); window.location.href = "https://github.com/PrateekKrishna/Handpose-Detection"}} className="proj-btn">GitHub</button>
                    </div>
                </div>
                <button onClick={(e)=>{e.preventDefault(); window.location.href = "https://github.com/PrateekKrishna/Handpose-Detection"}} className="phone-btn">GitHub</button>
            </div>
        </div>
    );
}

export default Projects;