import React from 'react';
import SearchBoxSuggestions from 'srp-react-library-js/SearchBoxSuggestions';
import PropTypes from "prop-types";

/** Example of a textbox suggestions using a static array */
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
            "JavaScript",
            "TypeScript",
            "React",
            "Vue",
            "Angular",
            "Meteor",
            "Ember",
            "Backbone",
            "Aurelia",
            "Polimer",
            "Mithril.js",
            "JQuery",
            "Lodash",
            "Modernizr",
            "Babel",
            "Webpack",
            "D3js",
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
      const divStyle = {
        "text-align": "center"
      };

        return (
            <div style = {divStyle}>
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
