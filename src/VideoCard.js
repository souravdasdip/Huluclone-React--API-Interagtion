import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videocard">
      <img
        alt="movie poster"
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
      />

      <TextTruncate
        lines={1}
        element="p"
        truncateText="..."
        textTruncateChild={<a href="#">Read on..</a>}
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      {/* <p>
        <ThumbUpIcon /> {movie.vote_count}
      </p>
      <p>Release date: {movie.release_date || movie.first_air_date}</p> */}
    </div>
  );
});

export default VideoCard;
