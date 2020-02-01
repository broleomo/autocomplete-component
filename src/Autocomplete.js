import React, {useState, useEffect} from 'react';
import SuggestionsList from './SuggestionsList';
import axios from "axios";
import './Autocomplete.css';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  let [suggestions, setFilteredSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  const  [data, setData] = useState({ predictions: [] });
  
  useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      'https://coding-challenge.echoandapex.com/locations?q=pdx',
    );
    setData(result.data);
  };
  fetchData();
}, []);

  suggestions = data.predictions.map(prediction => ({name: prediction.name, description: prediction.description}));

  const onChange = event => {
    const value = event.target.value;
    setInputValue(value);

    setFilteredSuggestions(suggestions);
    setDisplaySuggestions(true);
  };

  const onSelectSuggestion = index => {
    setSelectedSuggestion(index);
    setInputValue(suggestions[index]);
    setFilteredSuggestions([suggestions]);
    setDisplaySuggestions(false);
  };

  return (
    <>
      <input
        className="form-input"
        type="text"
        onChange={onChange}
        value={inputValue.name}
      />
      <SuggestionsList
        inputValue={inputValue}
        selectedSuggestion={selectedSuggestion}
        onSelectSuggestion={onSelectSuggestion}
        displaySuggestions={displaySuggestions}
        suggestions={suggestions}
      />
    </>
  );
};

export default Autocomplete;