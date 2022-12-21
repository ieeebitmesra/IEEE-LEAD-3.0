import React, { useEffect, useState } from "react";
import imdb_logo from "./imd-logo.png"


const MovieCard = ({ movie: { title, release_date, poster_path, overview, id} }) => {
    const [imdb, setImdb] = useState("");

    const fetch_imdb = async() => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ddcfd301826bc5ce17015fd73c4bf8a5`)
        const data = await res.json()
        setImdb(data.imdb_id)
    }
    fetch_imdb()

    return(
        <div className="moviecard">
            <div className="titlediv">
                <h2 className="title">{title}</h2>
            </div>
            <div className="year">
                <h2>{release_date.substring(0, 4)}</h2>
            </div>
            <a target="_blank" href={`https://www.imdb.com/title/${imdb}`}><img src={imdb_logo} alt="imdb_logo" className="imdb_logo"/></a>
            <div className="overview">
                <p>{overview}</p>
            </div>
            <img src={poster_path !== "N/A" ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://via.placeholder.com/400"} alt={title} className="poster"/>
        </div>
    )
}

export default MovieCard