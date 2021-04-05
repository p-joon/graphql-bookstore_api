import { graphql } from '@apollo/client/react/hoc';
import { Component } from 'react';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }
  displayBooks() {
    let data = this.props.data;
    console.log(data);
    if (data.loading) {
      return(<div>Loading books...</div>);
    } else {
      return data.books.map(book => {
        return (<li key={ book.id } onClick={ (e => { this.setState({ selected: book.id }) })}>{ book.name }</li>)
      });
    }
  };
  render() {
    return (
      <div id="App">
        <ul id="book-list">
          { this.displayBooks() }
        </ul>
        <BookDetails bookId={ this.state.selected }/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);