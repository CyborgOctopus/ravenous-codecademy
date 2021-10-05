import React, { useState } from "react";
import logo from '../../logo.svg';
import './App.css';
import '../BusinessList/BusinessList.js';
import '../SearchBar/SearchBar.js';
import {SearchBar} from "../SearchBar/SearchBar";
import {BusinessList} from "../BusinessList/BusinessList";
import {Yelp} from '../../util/Yelp.js';

const App = () => {
    const [ businesses, setBusinesses ] = useState([]);

    const searchYelp = (term, location, sortBy) => {
        Yelp.search(term, location, sortBy).then(businesses => setBusinesses(businesses));
    };

    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={searchYelp}/>
        <BusinessList businesses={businesses} />
      </div>
    );
};

export default App;
