import React from 'react';
import SearchBoxSuggestions from 'srp-react-library-js/SearchBoxSuggestions';
import PropTypes from "prop-types";

// Import the Autocomplete Component
// import Autocomplete from 'react-autocomplete';

export default class ExampleSearchBoxSuggestions extends React.Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array),
        activeSuggestion: PropTypes.number,
        filteredSuggestions: PropTypes.instanceOf(Array),
        showSuggestions: PropTypes.bool,
        userInput: PropTypes.string
      };
    
      static defaultProps = {
        suggestions: [
            "Alligator",
            "Alligator1",
            "Alligator2",
            "Alligator3",
            "Alligator4",
            "Bask",
            "Bask1",
            "Bask2",
            "Bask3",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
        ]       
      };
    
      constructor(props) {
        super(props);
    
        this.state = {
          // The active selection's index
          activeSuggestion: 0,
          // The suggestions that match the user's input
          filteredSuggestions: [],
          // Whether or not the suggestion list is shown
          showSuggestions: false,
          // What the user has entered
          userInput: ""
        };
      }
    
      onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
    
        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
          userInput: e.currentTarget.value
        });
      };
    
      onClick = e => {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
      };
    
      onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
    
        // User pressed the enter key
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
      };

    render() {
        return (
            <div>
                <SearchBoxSuggestions activeSuggestion = {this.state.activeSuggestion} 
                                      filteredSuggestions = {this.state.filteredSuggestions}
                                      showSuggestions = {this.state.showSuggestions}
                                      userInput = {this.state.userInput}
                                      onChange = {this.onChange.bind(this)}
                                      onClick = {this.onClick.bind(this)}
                                      onKeyDown = {this.onKeyDown.bind(this)}/>
            </div>
        );
    }
}
