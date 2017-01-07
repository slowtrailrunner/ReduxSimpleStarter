import React, { Component } from 'react';

/**
 * The search bar.
 */
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  /**
   * Handle changes to the input element.
   *
   * @param event - the  genertic synthetic event object
   */
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
