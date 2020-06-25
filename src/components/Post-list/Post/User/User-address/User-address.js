import React from 'react';
import PropTypes from 'prop-types';
import './User-address.css';

export const UserAddress = ({ address }) => (
  <div className="address">
    <span>{address.street}</span>
    &nbsp;
    <span>{address.suite}</span>
    &nbsp;
    <span>{address.city}</span>
    &nbsp;
    <span>{address.zipcode}</span>
    &nbsp;
    <span>
      {address.geo.lat}
      &nbsp;
      {address.geo.lng}
    </span>
  </div>
);

UserAddress.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
