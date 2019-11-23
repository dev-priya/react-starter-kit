import React from 'react';
import PropTypes from 'prop-types';

const SimpleComponent = ({ message }) => <div>{message}</div>;

SimpleComponent.propTypes = {
  message: PropTypes.string.isRequired
};

export default SimpleComponent;