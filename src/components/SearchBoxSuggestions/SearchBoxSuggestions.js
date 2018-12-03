import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { TextBox, Suggestions, Suggestion, ActiveSuggestion, NoSuggestions, SuggestionsContainer } from './SearchBoxSuggestionsComponents';

/** Autocomplete textbox */
const SearchBoxSuggestions = ({activeSuggestion, filteredSuggestions, showSuggestions, userInput, onChange, onClick, onKeyDown }) => {
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <Suggestions>
                        {filteredSuggestions.map((suggestion, index) => {
                            if (index === activeSuggestion) {
                                return (
                                    <ActiveSuggestion key={suggestion} onClick={onClick}>
                                        {suggestion}
                                    </ActiveSuggestion>
                                );
                            }else{
                                return (
                                    <Suggestion key={suggestion} onClick={onClick}>
                                        {suggestion}
                                    </Suggestion>
                                );
                            }


                        })}
                    </Suggestions>
                );
            } else {
                suggestionsListComponent = (
                    <NoSuggestions class="no-suggestions">
                        <em>No suggestions</em>
                    </NoSuggestions>
            );
        }
    }

    return (
        <Fragment>
            <SuggestionsContainer>
                <TextBox
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </SuggestionsContainer>
        </Fragment>
    );

}

SearchBoxSuggestions.propTypes = {
    /** Active selection index*/
    activeSuggestion: PropTypes.number,

    /** Suggestions that match with the user's input*/
    filteredSuggestions: PropTypes.array,

    /** Whether or not the suggestion list is shown*/
    showSuggestions: PropTypes.bool,

    /** User's input*/
    userInput: PropTypes.string
}

export default SearchBoxSuggestions;