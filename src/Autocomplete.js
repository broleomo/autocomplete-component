import React from "react";
import PropTypes from "prop-types";
import './Autocomplete.css';



const Autocomplete  = ({suggestions}) => {
  const suggestionItems = suggestions.map((suggestion) => <li key={suggestion.id}>{suggestion.name}</li>)
  return (
    <div className="autocomplete-container">
      <ul>
        {suggestionItems}
      </ul>
    </div>
    )
}

export default Autocomplete;