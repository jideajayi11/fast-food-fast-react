import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../components/presentational/Input';


describe('Integration test for the input component. ', () => {
  it('should render an input field', () => {
    const propObj = {
      onChange: () => {},
      value: 'type something',
      type: 'text',
    };
    const wrapper = shallow(<Input {...propObj} />);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
