import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post/Post';
import './Post-list.css';

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
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};
