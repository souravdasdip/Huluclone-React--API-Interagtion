import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Movies from "./Movies.js";
import requests from "./requests";

function App() {
  const [selectedOption, setselectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setselectedOption={setselectedOption} />
      <Movies selectedOption={selectedOption} />
    </div>
  );
}

export default App;
