import React from 'react';
import PropTypes from 'prop-types';

import './styles/submitButton.scss';

const SubmitButton = ({ placeHolder }) => (
  <button className="submit-button" type="submit">
    { placeHolder }
  </button>
);

SubmitButton.propTypes = {
  placeHolder: PropTypes.string.isRequired,
};

export default SubmitButton;
