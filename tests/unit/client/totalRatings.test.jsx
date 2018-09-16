import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TotalRatings from '../../../client/src/totalRatings';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Total Ratings Component', () => {
  const ratings = shallow(<TotalRatings avgRatings={3.3} totalRatings={27} />);

  test('should render component', () => {
    expect(ratings.exists()).toBeTruthy();
  });

  test('should render stars', () => {
    expect(ratings.find('FontAwesomeIcon').length).toEqual(5);
    expect(ratings.find('FontAwesomeIcon').filter('[color="#FDC038"]').length).toEqual(3);
  });
  test('should render total ratings count', () => {
    expect(
      ratings
        .find('div')
        .first()
        .text()
        .indexOf('(27 Ratings)')
    ).toBeGreaterThan(-1);
  });
});
