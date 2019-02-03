import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/presentational/Footer';


describe('Integration test for the footer component. ', () => {
  it('should render footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('#footerAuth').length).toEqual(1);
    expect(wrapper.find('footer').length).toEqual(1);
  });
});
