import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from '../../../client/src/review';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Total Ratings Component', () => {
  const reviewObject = {
    rating: 3.2,
    review: 'This product is awesome!',
    helpfulness: 7,
    last_updated: '2018-07-14 02:46:05.682Z',
    user: {
      name: 'Vik',
      reviews: 6,
      ratings: 12
    }
  };
  const review = shallow(<Review reviewObject={reviewObject} />);

  test('should render component', () => {
    expect(review.exists()).toBeTruthy();
  });

  test('should render stars', () => {
    expect(review.find('FontAwesomeIcon').length).toEqual(5);
    expect(review.find('FontAwesomeIcon').filter('[color="#FDC038"]').length).toEqual(3);
  });

  test('should render review text', () => {
    expect(
      review
        .find('p')
        .first()
        .text()
    ).toEqual('This product is awesome!');
  });

  test('should render helpfulness button and count', () => {
    expect(review.find('button').length).toEqual(1);
    expect(
      review
        .find('button')
        .first()
        .text()
    ).toBe(`Helpfulness 7`);
  });
});
