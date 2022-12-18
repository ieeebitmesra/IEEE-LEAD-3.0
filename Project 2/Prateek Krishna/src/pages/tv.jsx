import {React, useState, useEffect} from 'react'
import { Box, Button } from '@mui/material'
import Navbar from '../components/navbar'
import axios from 'axios';
import MultiActionAreaCard from '../components/movieCard'
import Head from 'next/head'
import Footer from '../components/footer';


function Trending(props) {
    const hod = "./hod.jpg"
    const title = "House of The Dragons"

    var [movies, setMovies] = useState([]);
    var [ind, setInd] = useState(1);
    function handleNext(){
        console.log(next);
        setInd(ind+1);
      }
      function handlePrev(){
        setInd(ind>1?ind-1:ind);
      }

    async function getHandle() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=34a470327cec0df094785c27a8b66230&language=en-US&page=${ind}`);
        setMovies(response.data.results);
        console.log(response);
      } catch (error) {
        console.log(error.response.status);
      }
    }
  
    useEffect(() => {
      getHandle();
    }, [ind]);

  return (
    <>
        <Head>
        <title>Tv Shows</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {
          movies.map((items, index)=>{
            return(
              <MultiActionAreaCard key = {index} title = {items.name} about = {items.overview} pic = {items.poster_path} release = {items.first_air_date
              }
                rating = {items.vote_average}
              />
            );
          })
        }
      </Box>
      <div style={{display: "flex", justifyContent: "flex-start", width: "100%", height: "80px", alignItems: "center", border: "2.5px solid black", borderRadius: "10px", marginTop: "20px", paddingLeft: "5vw", marginRight: "8vw"}}>
        <Button onClick={handlePrev} variant="contained" sx={{ height: "35px", width: "70px", mr: "4vw", backgroundColor: "black" }}>
          Back
        </Button>
        <Button onClick={handleNext} variant="contained" sx={{ height: "35px", width: "70px", backgroundColor: "black" }}>
          Next
        </Button>
      </div>
      {/* <div className="divider"></div> */}
      <Footer />
    </>
  )
}

export default Trending