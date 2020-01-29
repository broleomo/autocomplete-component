import React, {useState, useEffect} from 'react';
import Autocomplete from './Autocomplete';
import logo from './logo.svg';
import axios from "axios";
import './App.css';

function App() {
  const  [data, setData] = useState({ predictions: [] });
  console.log(data);
  useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      'https://coding-challenge.echoandapex.com/locations?q=pdx',
    );
    setData(result.data);
  };
  fetchData();
}, []);

  return (
    <div className="container">
      <h1>Blooming Pixel Creatives Autocomplete</h1>
      <div className="search-container">
        <input type="text" className="search-box"/>
        <button type="submit" className="search-button">Search</button>
      </div>
      <Autocomplete 
        text="This is the autocomplete component"
        suggestions={data.predictions}
      />
    </div>
  );
}

export default App;
