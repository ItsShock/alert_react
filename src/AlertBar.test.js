import React from 'react';
import AlertBar from './AlertBar';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('List tests', () => {
  let wrapper;

  it('Poprawnie wyświetla licznik w H1', () => {
    wrapper = mount(<AlertBar />);
    expect(wrapper.find('h1').text()).toBe("5")
  });

  it('Poprawnie wyświetla Boom! w H1', () => {
    wrapper = mount(<AlertBar />);
    setTimeout(() => {
      expect(wrapper.find('h1').text()).toBe("fBoom!");
    }, 5000)
  });
});