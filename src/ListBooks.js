import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./components/Book";

class ListBooks extends Component {
  render() {
    const { books, changeShelf } = this.props;
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => book.shelf === "currentlyReading")
                      .map(b => (
                        <Book
                          b={b}
                          key={b.id}
                          img={b.imageLinks && b.imageLinks.thumbnail}
                          shelf={b.shelf}
                          changeShelf={changeShelf}
                          title={b.title}
                          authors={b.authors && b.authors.join(", ")}
                        />
                      ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => book.shelf === "wantToRead")
                      .map(b => (
                        <Book
                          b={b}
                          key={b.id}
                          img={b.imageLinks && b.imageLinks.thumbnail}
                          shelf={b.shelf}
                          changeShelf={changeShelf}
                          title={b.title}
                          authors={b.authors && b.authors.join(", ")}
                        />
                      ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => book.shelf === "read")
                      .map(b => (
                        <Book
                          b={b}
                          key={b.id}
                          img={b.imageLinks && b.imageLinks.thumbnail}
                          shelf={b.shelf}
                          changeShelf={changeShelf}
                          title={b.title}
                          authors={b.authors && b.authors.join(", ")}
                        />
                      ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" className="button">
              Add a book
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default ListBooks;
