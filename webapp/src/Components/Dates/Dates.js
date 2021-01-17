import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './styles/dates.scss';

const Dates = ({ dateName, date }) => (
  <div className="showing-date">
    <h1 className="showing-date-name">{ dateName }</h1>
    <p>{ date.format('DD/MM/YYYY') }</p>
  </div>
);

Dates.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  dateName: PropTypes.string.isRequired,
};

export default Dates;
