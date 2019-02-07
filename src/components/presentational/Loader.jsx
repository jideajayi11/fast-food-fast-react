import React from 'react';
import PropTypes from 'prop-types';
import img from '../../images/loader.gif';

const LoaderComponent = ({
  loader
}) => (
  <div
    className={loader ? "loading" : ""}
  >
    <img
      src={img}
      className="loading-img"
    />
  </div>
);

LoaderComponent.propTypes = {
  loader: PropTypes.bool.isRequired,
};

LoaderComponent.defaultProps = {
  loader: false,
};

export default LoaderComponent;
