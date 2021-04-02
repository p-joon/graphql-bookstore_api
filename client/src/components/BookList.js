import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

function BookList() {
    return (
      <div id="App">
          <ul id="book-list">
            <li>Book name</li>
          </ul>
      </div>
    );
  }

export default graphql(getBooksQuery)(BookList);