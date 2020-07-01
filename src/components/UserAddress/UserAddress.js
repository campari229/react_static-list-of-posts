import React from 'react';
import './UserAddress.css';

import { userAddress } from '../Shape/Shape';

export const UserAddress = ({ address }) => (
  <div className="user__address">
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
  address: userAddress.isRequired,
};
