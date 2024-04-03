import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()



function App() {
  interface Genre {
    id: number
    name: string
  }

  const genres = {
        "12": "Adventure",
        "14": "Fantasy",
        "16": "Animation",
        "18": "Drama",
        "27": "Horror",
        "28": "Action",
        "35": "Comedy",
        "36": "History",
        "37": "Western",
        "53": "Thriller",
        "80": "Crime",
        "99": "Documentary",
        "878": "Science Fiction",
        "9648": "Mystery",
        "10402": "Music",
        "10749": "Romance",
        "10751": "Family",
        "10752": "War",
        "10763": "News",
        "10764": "Reality",
        "10767": "Talk Show"
  }

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/genres',
    headers: {
      'X-RapidAPI-Key': process.env.KEY,
      'X-RapidAPI-Host': process.env.HOST
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('effect');

      try {
        const res = await axios.request(options);
        console.log(res.data);
        //setGenres(res.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <h1>Movies</h1>
    </>
  )
}

export default App

// var obj = { foo: "bar" };
// var has = false;
// for (let key in obj) { if (obj[key] == "SEARCH") { has = true; break; }}
