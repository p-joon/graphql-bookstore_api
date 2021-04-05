import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { Component } from 'react';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  displayBooks() {
    let data = this.props.data;
    console.log(data);
    if (data.loading) {
      return(<div>Loading books...</div>);
    } else {
      return data.books.map(book => {
        return (<li key={ book.id }>{ book.name }</li>)
      });
    }
  };
  render() {
    return (
      <div id="App">
        <ul id="book-list">
          { this.displayBooks() }
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);