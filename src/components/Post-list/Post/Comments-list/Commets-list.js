import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from './Comment/Comment';

import './Comments.css';

export const CommentsList = ({ comments }) => (
  <ul className="comments-list">
    {comments.map(comment => (
      <li key={comment.id} className="comment-list__item comment">
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
