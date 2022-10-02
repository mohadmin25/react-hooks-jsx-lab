import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const props = value =>value === " " ? name : city
  console.log(props)
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    
    </div>
  );
}

export default Home;