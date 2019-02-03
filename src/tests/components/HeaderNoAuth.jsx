import React from 'react';
import { shallow } from 'enzyme';
import HeaderNoAuth from '../../components/presentational/HeaderNoAuth';


describe('Integration test for the unauth header component. ', () => {
  it('should unauth header', () => {
    const wrapper = shallow(<HeaderNoAuth />);
    expect(wrapper.find('header').length).toEqual(1);
  });
});
