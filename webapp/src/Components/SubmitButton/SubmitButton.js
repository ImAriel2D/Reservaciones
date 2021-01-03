import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ placeHolder }) => (
  <button type="submit">
    { placeHolder }
  </button>
);

SubmitButton.propTypes = {
  placeHolder: PropTypes.string.isRequired,
};

export default SubmitButton;
