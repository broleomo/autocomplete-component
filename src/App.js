import React, {useState, useEffect} from 'react';
import Autocomplete from './Autocomplete';
import axios from "axios";
import './App.css';

function App() {
  return (
    <>
      <h1>Blooming Pixels Autocomplete</h1>
      <div className="container">
        <Autocomplete />
      </div>
    </>
  );
}

export default App;
