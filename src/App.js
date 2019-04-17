import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResult: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState(() => ({ books })));
  }
  searchBook = async query => {
    const results = await BooksAPI.search(query).then(results => results);

    if (results !== undefined && !results.hasOwnProperty("error")) {
      this.setState({ searchResult: results });
    } else if (
      query === "" ||
      results === undefined ||
      results.hasOwnProperty("error")
    ) {
      this.setState({ searchResult: undefined });
    }
  };
  changeShelf = (book, e) => {
    // Remove the current book from the state and store it into a new variable
    const newbooks = this.state.books.filter(b => b.id !== book.id);
    // Retrieve shelf value from the event
    const newShelf = e.target.value;
    // Replace the current book shelf with newShelf
    book.shelf = newShelf;
    // Insert the edited book in newbooks array
    newbooks.push(book);
    // Update the state with the newbooks array
    this.setState({ books: newbooks });
    // Update the current book in the API
    BooksAPI.update(book, newShelf);
  };

  render() {
    const { books, searchResult } = this.state;
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <ListBooks books={books} changeShelf={this.changeShelf} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchBook
                searchBook={this.searchBook}
                searchResult={searchResult}
                changeShelf={this.changeShelf}
              />
            )}
          />
          <div style={{textAlign: 'center'}}>coded by Erwinn Grebo </div>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
