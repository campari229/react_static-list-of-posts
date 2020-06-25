import React from 'react';
import PropTypes from 'prop-types';
import { UserAddress } from './User-address/User-address';
import './User.css';

export const User = ({ userData }) => (
  <>
    <h4 className="user-username">{userData.username}</h4>
    <p className="user-name">{userData.name}</p>
    <UserAddress address={userData.address} />
  </>
);

User.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
