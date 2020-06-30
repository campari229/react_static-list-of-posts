import React from 'react';
import './Comment.css';
import { commentShape } from '../../../../../Shape/Shape';

export const Comment = ({ comment }) => (
  <>
    <h4 className="comment__name">{comment.name}</h4>
    <a className="comment__link" href={comment.email}>{comment.email}</a>
    <p className="comment__text">{comment.body}</p>
  </>
);

Comment.propTypes = {
  comment: commentShape.isRequired,
};
