import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({
  id, className, placeholder, onChange, type, name, required, accept, value, ref
}) => (
  <input
    id={id}
    className={className}
    placeholder={placeholder}
    onChange={onChange}
    type={type}
    name={name}
    required={required}
    accept={accept}
    value={value}
    ref={ref}
  />
);

InputComponent.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  required: PropTypes.string,
  accept: PropTypes.string,
  value: PropTypes.string,
  ref: PropTypes.objectOf(PropTypes.any),
};

InputComponent.defaultProps = {
  id: "",
  className: "",
  placeholder: "",
  name: "",
  required: "",
  accept: "",
  value: "",
  ref: React.createRef(),
};

export default InputComponent;
