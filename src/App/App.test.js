import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// example test file
describe('App', () => {
  const wrapper = shallow(<App />);

  // shallow rendering example
  it('should render a SimpleComponent and a StyledComponent', () => {
    expect(wrapper.find('SimpleComponent').length).toBe(1);
    expect(wrapper.find('StyledComponent').length).toBe(1);
  });

  // snapshot testing example
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});