import React from 'react';
import PropTypes from 'prop-types';
import { UserAddress } from './UserAddress/UserAddress';
import './User.css';
import { userAddress } from '../../../../Shape/Shape';

export const User = ({ userData }) => (
  <>
    <h4 className="user__username">{userData.username}</h4>
    <p className="user__name">{userData.name}</p>
    <UserAddress address={userData.address} />
  </>
);

User.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: userAddress.isRequired,
  }).isRequired,
};
