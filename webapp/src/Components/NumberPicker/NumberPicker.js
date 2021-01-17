import React from 'react';
import PropTypes from 'prop-types';

import './styles/numberPicker.scss';

const NumberPicker = ({
  handleDecrease,
  handleIncrease,
  placeHolder,
  value,
  roomsAvailable,
}) => {
  const hasRoomsAvailable = roomsAvailable > 0;
  const hasRoomsAvailableClassName = hasRoomsAvailable ? '' : 'no-rooms-available';

  return (
    <div className={`number-picker-container ${hasRoomsAvailableClassName}`}>
      <span className="title-place-holder">{placeHolder}</span>
      <div className="number-container">
        <button className="number-button" onClick={handleDecrease} type="button" disabled={!hasRoomsAvailable}>
          -
        </button>
        <p className="number-of-rooms">
          {value}
        </p>
        <button className="number-button" onClick={handleIncrease} type="button" disabled={!hasRoomsAvailable}>
          +
        </button>
      </div>
      {
        (roomsAvailable <= 5 && hasRoomsAvailable)
        && <p className="last-available">{`Últimos cuartos (${roomsAvailable}) disponibles.`}</p>
      }
    </div>
  );
};

NumberPicker.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  roomsAvailable: PropTypes.number.isRequired,
};

export default NumberPicker;
