import React from 'react';
import PropTypes from 'prop-types';

import { commentShape } from '../../Shape/Shape';
import { Post } from './Post/Post';
import './PostList.css';

export const PostsList = ({ posts }) => (
  <ul className="posts-list">
    {posts.map(post => (
      <li className="posts-list__item" key={post.id}>
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(commentShape.isRequired).isRequired,
};
