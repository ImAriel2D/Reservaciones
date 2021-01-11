import React from 'react';
import PropTypes from 'prop-types';

import './styles/loading.scss';

const Loading = ({ isLoading }) => {
  const className = isLoading ? 'loading-container' : 'hide-loading';

  return (
    <div className={className}>
      <div className="loading" />
    </div>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
