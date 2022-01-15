import React, { useState, useEffect } from "react";
import "./Movies.css";
import VideoCard from "./VideoCard.js";
import axios from "./axios";
import FlipMove from "react-flip-move";
import requests from "./requests";

function Movies({ selectedOption }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setmovies(request.data.results);
      console.log(request);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="movies">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Movies;
