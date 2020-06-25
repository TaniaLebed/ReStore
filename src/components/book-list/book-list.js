import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { fetchBooks, bookAddedToCart } from "../../actions";
import { withBookstoreService } from "../hoc";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./book-list.css";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Spinner />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispathToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispathToProps)(BookListContainer)
);
