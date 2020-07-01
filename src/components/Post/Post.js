import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User/User';
import { CommentsList } from '../CommentsList/CommentsList';
import { commentShape } from '../Shape/Shape';

import './Post.css';

export const Post = ({ post }) => (
  <>
    <div className="post">
      <div className="post__user user">
        <User userData={post.user} />
      </div>
      <div className="post__info">
        <h3 className="post__title">
          {post.title}
        </h3>
        <p className="post__text">
          {post.body}
        </p>
      </div>
    </div>
    <CommentsList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    comments: PropTypes.arrayOf(commentShape.isRequired).isRequired,
  }).isRequired,
};
