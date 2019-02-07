import React from 'react';
import { shallow } from 'enzyme';
import UserSignIn from '../../components/presentational/UserSignIn';


describe('Integration test for user sign in', () => {
  it('should render the sign in form for users', () => {
    const propObj = {
      onChange: () => {},
      onClick: () => {},
      disabled: true,
      errorMsg: 'user',
      email: 'jide.com',
      password: 'secret',
    };
    const wrapper = shallow(<UserSignIn {...propObj} />);
    expect(wrapper.find('.container').length).toEqual(1);
    expect(wrapper.find('.middle-box').length).toEqual(1);
    expect(wrapper.find('.middle-box-body').length).toEqual(1);
    expect(wrapper.find('.middle-box-head').length).toEqual(1);
  });
});
