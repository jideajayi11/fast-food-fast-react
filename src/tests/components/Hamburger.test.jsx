import React from 'react';
import { shallow } from 'enzyme';
import Hamburger from '../../components/presentational/Hamburger';


describe('Integration test for the Hamburger component. ', () => {
  it('should render the hamburger element', () => {
    const propObj = {
      onClick: () => {},
      onBlur: () => {},
      disabled: false,
      value: 'click me',
    };
    const wrapper = shallow(<Hamburger {...propObj} />);
    expect(wrapper.find('.strip').length).toEqual(3);
    expect(wrapper.find('button').length).toEqual(1);
  });
});
