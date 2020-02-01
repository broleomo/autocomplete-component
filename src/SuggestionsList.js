import React from 'react';
import './SuggestionsList.css';

const SuggestionsList = props => {
  const {
    suggestions,
    inputValue,
    onSelectSuggestion,
    displaySuggestions,
    selectedSuggestion
  } = props;
  console.log(suggestions);

  if (inputValue && displaySuggestions) {
    if (suggestions.length > 0) {
      return (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => {
            const isSelected = selectedSuggestion === index;
            const classname = `suggestion ${isSelected ? "selected" : ""}`;
            return (
              <li
                key={index}
                className={classname}
                onClick={() => onSelectSuggestion(index)}
              >
                <p className="suggestion-name">{suggestion.name}</p> 
                <p className="suggestion-description">{suggestion.description}</p> 
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <div>No suggestions available...</div>;
    }
  }
  return <></>;
};

export default SuggestionsList;