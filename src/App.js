import React from "react";
import './App.css';
import SearchByWork from "./SearchByWord";

export default function App() {

    return (
        <React.Fragment>
          <div>
            <h1>Search artworks by subject</h1>
            <SearchByWork />
          </div>
        </React.Fragment>
    )
}