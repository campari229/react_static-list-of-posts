import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ comment }) => (
  <>
    <h4 className="comment-name">{comment.name}</h4>
    <a className="comment-link" href={comment.email}>{comment.email}</a>
    <p className="comment-text">{comment.body}</p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
