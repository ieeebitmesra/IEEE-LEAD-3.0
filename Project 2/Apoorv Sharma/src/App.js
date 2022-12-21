import React, { useEffect, useState } from "react";
import Header from "./Header"
import SearchIcon from "./mag_glass.png";
import TrendingBracket from "./TrendingBracket"
import notfound from "./not_found.png"
import MovieCard from "./MovieCard"
import "./App.css"

const api_key = 'api_key=ddcfd301826bc5ce17015fd73c4bf8a5';
const base = 'https://api.themoviedb.org/3';
const trending_url = base + '/discover/movie?sort_by=popularity.desc&' + api_key;
const search_url = base + '/search/movie?' + api_key + "&query="

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [istrending, setIstrending] = useState(false)

    useEffect(() => {
        SearchTrending();
    }, []);

    const SearchTrending = async() => {
        setIstrending(true)
        const res = await fetch(trending_url)
        const data = await res.json()
        setMovies(data.results)
    }

    const searchMovies = async(title) => {
        setIstrending(false)
        const res = await fetch(search_url + `${title}`)
        const data = await res.json()
        setMovies(data.results)
    }

    return(
        <div className="App">
            <Header/>
            <div className="search">
                <form
                onSubmit={(e) => {
                    e.preventDefault()
                    {setSearchTerm(document.getElementById('input').value)}
                    searchMovies(searchTerm)
                }}
                >
                    <input
                        id="input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for movies..."
                    />
                </form>    
              <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
              />
            </div>
            
            {istrending === true? (
                <TrendingBracket />
            ):(
                null
            )}

            {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie = {movie}/> 
              ))}
            </div>
            ) : (
                <div className="empty">
                    <img src={notfound} alt="Not_Found" className="notfoundimg"/>
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    )
}

export default App;