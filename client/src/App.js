// components
import BookList from './components/BookList';
import { ApolloProvider } from '@apollo/client'

// apollo client setup
const client = new AppolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Book Store Home Page</h1>
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;