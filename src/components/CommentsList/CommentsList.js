import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment/Comment';
import { commentShape } from '../Shape/Shape';

import './CommentsList.css';

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
  comments: PropTypes.arrayOf(commentShape.isRequired).isRequired,
};
