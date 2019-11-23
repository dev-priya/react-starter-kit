import React from 'react';
import {shallow} from 'enzyme';
import StyledComponent from './StyledComponent';

describe('StyledComponent', () => {
  const wrapper = shallow(<StyledComponent message="test message" />);

  it('renders a StyledDiv', () => {
    expect(wrapper.find('StyledDiv').length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});