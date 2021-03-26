import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = (setupProps = {}) => {
  const defaultProps = {};
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <App />
  );

  return {
    props,
    wrapper
  };
};


describe('<App/>', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
