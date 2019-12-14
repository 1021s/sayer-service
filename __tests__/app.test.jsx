/* global describe, it , expect */
import { shallow } from 'enzyme';
import React from 'react';
import './setUpTests';

import ExponGrowth from "../public/src/components/ExponGrowth";



describe('First set of tests:', () => {
  const wrapper = shallow(<ExponGrowth />);

  it('should have a div tag', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render chart without throwing an error', () => {
    const chart = wrapper.contains(Chart);
    expect(chart).toBe(true);
  });

  it('should have a data length of 11', () => {
    expect(data.length).toHaveLength(11);
  })
});



