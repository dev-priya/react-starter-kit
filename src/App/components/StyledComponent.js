import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// styled-component example
const StyledDiv = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 4px;
  margin-top: 8px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: #f1c40f;
  }
`;

// you need this for finding this item during unit testing
StyledDiv.displayName = 'StyledDiv';

const StyledComponent = ({ message }) => <StyledDiv>{message}</StyledDiv>;

StyledComponent.propTypes = {
  message: PropTypes.string.isRequired
};

export default StyledComponent;