import React from 'react';
import { shallow } from 'enzyme';
import NavList from '../../components/presentational/NavList';


describe('Integration test for the Navigation list', () => {
  it('should render the Navigation list for users', () => {
    const propObj = {
      onLogout: () => {},
      menuItems: true,
      role: 'user',
    };
    const wrapper = shallow(<NavList {...propObj} />);
    expect(wrapper.find('Link').length).toEqual(2);
    expect(wrapper.find('#nav-list').length).toEqual(1);
    expect(wrapper.find('.menu-items').length).toEqual(0);
  });
  it('should render the Navigation list for admin', () => {
    const propObj = {
      onLogout: () => {},
      menuItems: false,
      role: 'admin',
    };
    const wrapper = shallow(<NavList {...propObj} />);
    expect(wrapper.find('Link').length).toEqual(2);
    expect(wrapper.find('.menu-items').length).toEqual(1);
    expect(wrapper.find('#nav-list').length).toEqual(1);
  });
});
