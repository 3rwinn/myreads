import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./components/Book";

class SearchBook extends Component {
  render() {
    const { searchResult, searchBook, changeShelf } = this.props;
    let content;
    if (searchResult === undefined) {
      content = <div>We coudn't find books you are looking for</div>;
    } else {
      content = searchResult.map(b => (
        <Book
          b={b}
          key={b.id}
          img={b.imageLinks && b.imageLinks.thumbnail}
          shelf={b.shelf}
          changeShelf={changeShelf}
          title={b.title}
          authors={b.authors && b.authors.join(", ")}
        />
      ));
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={e => searchBook(e.target.value)}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{content}</ol>
        </div>
      </div>
    );
  }
}
export default SearchBook;
