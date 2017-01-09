import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever gets returned will show up as props in BookList
  return {
    books: state.books
  }
}

// Anything returns from this function will end up as props on
// the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever select book is called, the result shold be passed
  // to all our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from a Component to Container - it needs to know
// about the new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
