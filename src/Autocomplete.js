import React, {useState, useEffect} from 'react';
import SuggestionsList from './SuggestionsList';
import axios from "axios";
import './Autocomplete.css';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
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

const formattedPredictions = data.predictions.map(prediction => ({name: prediction.name, description: prediction.description}));

const suggestions = formattedPredictions.map((prediction) => prediction.name);

  const onChange = event => {
    const value = event.target.value;
    setInputValue(value);

    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filteredSuggestions);
    setDisplaySuggestions(true);
  };

  const onSelectSuggestion = index => {
    setSelectedSuggestion(index);
    setInputValue(filteredSuggestions[index]);
    setFilteredSuggestions([]);
    setDisplaySuggestions(false);
  };

  return (
    <>
      <input
        className="form-input"
        type="text"
        onChange={onChange}
        value={inputValue}
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