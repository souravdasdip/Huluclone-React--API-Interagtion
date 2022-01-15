import React from "react";
import "./Nav.css";
import requests from "./requests";

function Nav({ setselectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setselectedOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchTopRAted)}>
        Top Rated
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchRomanticMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchMysteryMovies)}>
        Mystery
      </h2>
      <h2 onClick={() => setselectedOption(requests.fetchScifi)}>Sci-fi</h2>
      <h2 onClick={() => setselectedOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setselectedOption(requests.fetchAnimation)}>
        Animation
      </h2>
    </div>
  );
}

export default Nav;
