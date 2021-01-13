import React from 'react';
import PropTypes from 'prop-types';

import { formatter } from '../../utils/formatter';

import './styles/roomTotal.scss';

const RoomTotal = ({ roomType, numberOfRooms, total }) => {
  const moneyFormat = formatter.format(total);

  return numberOfRooms > 0 ? (
    <div className="room-total-container">
      <h1 className="room-type">
        { roomType }
        {' '}
        (
        {numberOfRooms}
        )
      </h1>
      <p className="total-room">
        {' '}
        <span>
          {moneyFormat}
        </span>
      </p>
    </div>
  ) : null;
};

RoomTotal.propTypes = {
  roomType: PropTypes.string.isRequired,
  numberOfRooms: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default RoomTotal;
