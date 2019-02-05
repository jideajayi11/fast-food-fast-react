import React from 'react';
import PropTypes from 'prop-types';

const HamburgerComponent = ({
  id, onClick,  onBlur, disabled,ref
}) => (
  <button
    id={id}
    className="menu"
    onClick={onClick}
    onBlur={onBlur}
    type="button"
    disabled={disabled}
    ref={ref}
  >
    <span className="strip"></span>
    <span className="strip"></span>
    <span className="strip"></span>
  </button>
);

HamburgerComponent.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  ref: PropTypes.objectOf(PropTypes.any),
};

HamburgerComponent.defaultProps = {
  id: "",
  className: "",
  ref: React.createRef(),
};

export default HamburgerComponent;
