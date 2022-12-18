import { useState } from "react";
import "./navbar.css";
import logo from "../../assects/logo.png"
import Switch from "react-switch";
import { useEffect } from "react";
import {FaMoon, FaSun} from 'react-icons/fa'


function Navbar(props){

    var [menu, setMenu] = useState(false);
    function handleClick(){
        setMenu(menu = !menu);
    }

    function refresh(){
        window.location.reload(true);
    }

    //dark mode implementation
    var [toggle, setToggle] = useState(false)
    useEffect(()=>{
        console.log(toggle)
        if(toggle===false){
            // Landing Page
            document.getElementById("landingPage").className="hero";
            document.getElementById("blue").className="blue";
            document.getElementById("bit-mesra").className="blue";
            document.getElementById("dialogue").className="dialogue";

            //About Page
            document.getElementById("aboutPage").className="about"
            document.getElementById("about-me-dark").className="about-me-title"
            document.getElementById("about-content").className="about-content"
            //education Page
            document.getElementById("EduPage").className="timeline"
            document.getElementById("title").className="title"

            //Skills Page
            document.getElementById("newSkillsPage").className="new-skills"
            document.getElementById("skills-heading").className="skills-heading"

            //Projects Page
            document.getElementById("ProjectsPage").className = "projects"
            document.getElementById("proj-card-1").className = "proj-card"
            document.getElementById("proj-card-2").className = "proj-card"
            document.getElementById("proj-card-3").className = "proj-card"
            document.getElementById("proj-btn-1").className = "proj-btn"
            document.getElementById("proj-btn-2").className = "proj-btn"
            document.getElementById("proj-btn-3").className = "proj-btn"
            document.getElementById("proj-heading").className = "proj-heading"

            //codeforces page
            document.getElementById("CodeforcesPage").className = "codeforces"
            document.getElementById("cf-title").className = "cf-title"
            document.getElementById("cf-image").className = "cf-image"
            document.getElementById("cf-image").className = "cf-image"
            document.getElementById("search-btn").className = "search-btn"

        }else{
            //Landing Page
            document.getElementById("landingPage").className="hero hero-dark";
            document.getElementById("blue").className="blue blue-dark";
            document.getElementById("bit-mesra").className="blue blue-dark";
            document.getElementById("dialogue").className="dialogue-dark";

            //AboutPage
            document.getElementById("aboutPage").className="about about-dark"
            document.getElementById("about-me-dark").className="about-me-dark"
            document.getElementById("about-content").className="about-content-dark"

            //education page
            document.getElementById("EduPage").className="timeline-dark"
            document.getElementById("title").className="title-dark"

            //skills page
            document.getElementById("newSkillsPage").className="new skills new-skills-dark"
            document.getElementById("skills-heading").className="skills-heading-dark"

            //Projects
            document.getElementById("ProjectsPage").className = "projects projects-dark"
            document.getElementById("proj-card-1").className = "proj-card proj-card-dark"
            document.getElementById("proj-card-2").className = "proj-card proj-card-dark"
            document.getElementById("proj-card-3").className = "proj-card proj-card-dark"
            document.getElementById("proj-btn-1").className = "proj-btn proj-btn-dark"
            document.getElementById("proj-btn-2").className = "proj-btn proj-btn-dark"
            document.getElementById("proj-btn-3").className = "proj-btn proj-btn-dark"
            document.getElementById("proj-heading").className = "proj-heading proj-heading-dark"

            //codeforces
            document.getElementById("CodeforcesPage").className = "codeforces codeforces-dark"
            document.getElementById("cf-title").className = "cf-title cf-title-dark"
            document.getElementById("cf-image").className = "cf-image cf-image-dark"
            document.getElementById("search-btn").className = "search-btn search-btn-dark"
        }   

    },[toggle])
    function handleToggle(){
        setToggle(!toggle);
    }
    
 return(
        <nav className = "main-nav">
            <div className="logo">
                <h2> <a href="/" onClick={refresh}> <img alt="PK logo" src = {logo} height="30px" width="30px" /></a></h2>
            </div>
            <div className="menu-link">
                <ul id="navbar" className= { menu ? "#navbar active" : "#navbar"}>
                    <li>
                        <a onClick={handleClick} href="#landingPage">Home</a>
                    </li>
                    <li>
                        <a onClick={handleClick}  href="#aboutPage">About</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#EduPage">Education</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#newSkillsPage">Skills</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#ProjectsPage">Projects</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#CodeforcesPage">Codeforces</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#footerPage">Contact</a>
                    </li>
                    <li>
                        <Switch checkedHandleIcon={<FaSun style={{marginLeft: "5px", marginTop: "4px"}}/>} uncheckedHandleIcon={<FaMoon style={{marginLeft: "4px", marginTop: "4px"}}/>} uncheckedIcon={false} checkedIcon={false} onChange={handleToggle} checked = {toggle} />
                    </li>
                </ul>
            </div>
            <div id="mobile">
                <i onClick={handleClick} id="bar" className={ menu ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
 );
}

export default Navbar;