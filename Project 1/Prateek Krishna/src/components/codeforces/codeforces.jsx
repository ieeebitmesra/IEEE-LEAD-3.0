import React, { useEffect, useState } from "react";
import "./codeforces.css"
import cflogo from "./Codeforces_logo.svg"
import axios from 'axios';

function Codeforces(){


    let rankMap = new Map([
        ["newbie", "grey"],
        ["pupil", "green"],
        ["specialist", "darkcyan"],
        ["expert", "blue"],
        ["candidate master", "purple"],
        ["master", "orange"],
        ["international master", "orange"],
        ["grandmaster", "red"],
        ["international grandmaster", "red"],
        ["legendary grandmaster", "rgb(150,0,0)"],
    ]);

    var username = "prateekkrishna"
    async function getHandle() {
        try {
          const response = await axios.get('https://codeforces.com/api/user.info?handles=' + username);
          console.log(response.data.result[0]);
            setStats(response.data.result[0]);

        } catch (error) {
          console.log(error.response.status);
          if(error.response.status === 400){
            alert("User Handle Not Found");
          }
        }
      }
       

      const [stats, setStats] = useState({});

      useEffect(()=>{
        getHandle();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const [title, setTitle] = useState("");
      function handleChange(e){
        setTitle(e.target.value)
      }
      function handleClick(e){
        e.preventDefault();
        username = title;
        console.log(username);
        getHandle();
      }

    return (
        <div id="CodeforcesPage" className="codeforces">
            <h1 id="cf-title" className="cf-title">Codeforces Stats</h1>
            <hr className="hrule-cf"/>
            <div className="cf-workarea">
                <div style={{backgroundColor: rankMap.get(stats.rank)}} className="cf-stats">
                    <div className="name-link">
                    <h2 className="cf-text"><a target="_blank" rel="noopener noreferrer" href={"https://codeforces.com/profile/"+stats.handle}>{stats.handle}</a></h2>
                    </div>
                    <h3 className="cf-text">Rank: <span className="clr">{stats.rank}</span> </h3>
                    <h3 className="cf-text">Max Rating: <span className="clr">{stats.maxRating}</span> </h3>
                    <h3 className="cf-text">Current Rating: <span className="clr">{stats.rating}</span> </h3>
                </div>
                <div id="cf-image" className="cf-image">
                    <img className="cf-logo"  alt="cf logo" src = {cflogo}></img>
                </div>
            </div>
            <div className="search">
                <form className="search">
                    <input
                        type="text"
                        id="handle-search"
                        placeholder="Enter your CF Handle"
                        name={title}
                        value={title}
                        onChange = {(e) => handleChange(e)}
                    />
                    <button
                        id="search-btn"
                        className="search-btn"
                        type="submit"
                        onClick={(e) => handleClick(e)}
                    >
                        Search
                    </button>
                    <i onClick={(e) => handleClick(e)} aria-hidden="true" className="fa fa-search" id="phone"></i>
                </form>
            </div>
        </div>
    );
}

export default Codeforces;