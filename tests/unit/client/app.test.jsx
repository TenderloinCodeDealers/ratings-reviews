import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../../client/src/app';

Enzyme.configure({ adapter: new Adapter() });

describe('Test App Component', () => {
  const app = shallow(<App id="1" />);

  test('should render component', () => {
    expect(app.exists()).toBeTruthy();
  });

  test('should render container heading', () => {
    expect(app.find('h1').text()).toEqual('Customer Reviews');
    expect(app.find('h1').length).toEqual(1);
  });
});
