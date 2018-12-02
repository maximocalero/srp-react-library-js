import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const SearchBoxSuggestions = (props) => {
    let suggestionsListComponent;

    if (props.showSuggestions && props.userInput) {
        if (props.filteredSuggestions.length) {
        suggestionsListComponent = (
            <ul class="suggestions">
            {props.filteredSuggestions.map((suggestion, index) => {
                let className;

                if (index === props.activeSuggestion) {
                className = "suggestion-active";
                }

                return (
                <li className={className} key={suggestion} onClick={props.onClick}>
                    {suggestion}
                </li>
                );
            })}
            </ul>
        );
        } else {
        suggestionsListComponent = (
            <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
            </div>
        );
        }
    }

    return (
        <Fragment>
            <input
                type="text"
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                value={props.userInput}
            />
            {suggestionsListComponent}
        </Fragment>
    );

}

export default SearchBoxSuggestions;