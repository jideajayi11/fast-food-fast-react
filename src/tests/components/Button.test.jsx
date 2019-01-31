import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/presentational/Button';


describe('Integration test for the button component. ', () => {
  it('should render a button element', () => {
    const propObj = {
      onClick: () => {},
      disabled: false,
      value: 'click me',
      type: 'button',
    };
    const wrapper = shallow(<Button {...propObj} />);
    expect(wrapper.find('button').text()).toEqual('click me');
    expect(wrapper.find('button').length).toEqual(1);
  });
});
