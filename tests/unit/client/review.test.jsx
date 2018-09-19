import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Review from '../../../client/src/review';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Total Ratings Component', () => {
  const reviewObject = {
    rating: 3.2,
    review: 'This product is awesome!',
    helpfulness: 7,
    last_updated: '2018-07-14 02:46:05.682Z',
    user: [
      {
        _id: 'anId',
        name: 'Vik',
        reviews: 6,
        ratings: 12
      }
    ]
  };
  const review = shallow(<Review reviewObject={reviewObject} />);

  test('should render component', () => {
    expect(review.exists()).toBeTruthy();
  });

  test('should render stars', () => {
    const starsContainer = toJson(review).children[1];
    const stars = starsContainer.children.reduce(
      (sortedStars, item) => {
        if (item.type === 'FontAwesomeIcon') {
          if (item.props.color === '#A5A8AB') {
            sortedStars[0] += 1;
          } else if (item.props.color === '#FDC038') {
            sortedStars[1] += 1;
          }
        }
        return sortedStars;
      },
      [0, 0]
    );
    expect(stars[0]).toEqual(2);
    expect(stars[1]).toEqual(3);
  });

  test('should render review text', () => {
    const reviewTextCont = toJson(review).children[2];
    expect(reviewTextCont.children[0]).toEqual('This product is awesome!');
  });

  test('should render helpfulness button and count', () => {
    const button = toJson(review).children[3];
    expect(button.type).toEqual('styled.button');
    expect(button.children[1]).toBe(' Helpful');
    expect(button.children[3]).toBe(7);
  });
});
