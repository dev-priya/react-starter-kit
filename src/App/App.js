import React from 'react';
import {SimpleComponent, StyledComponent} from './components';

// example component
export default () => (
  <div>
    <SimpleComponent message="Simple component demo" />
    <StyledComponent message="Styled component demo" />
  </div>
);