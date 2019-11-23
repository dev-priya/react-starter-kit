import React from 'react';
import {shallow} from 'enzyme';
import SimpleComponent from './SimpleComponent';

describe('SimpleComponent', () => {
  const wrapper = shallow(<SimpleComponent message="test message" />);

  it('renders a div', () => {
    expect(wrapper.find('div').length).toBe(1);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});