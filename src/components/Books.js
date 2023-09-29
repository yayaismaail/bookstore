import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

const Books = ({ title, author }) => (
  <>
    <div>
      <h2 className="book">{title}</h2>
      <p className="by">by</p>
      <p className="author">{author}</p>
      <button type="button" className="remove-btn">Delete</button>
    </div>
    <Form />
  </>
);

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
