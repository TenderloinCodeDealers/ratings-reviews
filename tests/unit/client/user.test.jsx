import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faComment } from '@fortawesome/free-solid-svg-icons';
import User from '../../../client/src/user';

Enzyme.configure({ adapter: new Adapter() });

describe('Test User Component', () => {
  const userObject = {
    _id: 'anId',
    name: 'Jim Bo',
    reviews: 3,
    ratings: 12
  };
  let user = shallow(<User user={userObject} helpfulness={3} />);

  test('should render component', () => {
    expect(user.exists()).toBeTruthy();
  });

  test('should not render a badge', () => {
    expect(user.find('#badge').length).toEqual(0);
  });

  // Helpful Reviewer badge if rendered when helpfulness count is above 5 and reviews count is below 5
  test('should render "Helpful Reviewer" badge', () => {
    user = shallow(<User user={userObject} helpfulness={7} />);
    expect(user.find('#badge').text()).toEqual('HELPFUL REVIEWER');
  });

  // Top Reviewer badge if rendered when reviews count is above 5
  test('should render "Top Reviewer" badge', () => {
    userObject.reviews = 8;
    user = shallow(<User user={userObject} helpfulness={7} />);
    expect(user.find('#badge').text()).toEqual('TOP REVIEWER');
  });

  test('should render initials', () => {
    expect(
      user
        .find('#user-initials')
        .children()
        .first()
        .text()
    ).toEqual('JB');
  });

  test('should render user name with last name initial', () => {
    expect(user.find('#user-name').text()).toEqual('Jim B.');
  });

  test('should render a star icon for total ratings', () => {
    const elementToMatch = <FontAwesomeIcon icon={faStar} color="#A5A8AB" />;
    expect(
      user
        .find('FontAwesomeIcon')
        .first()
        .matchesElement(elementToMatch)
    ).toBeTruthy();
  });

  test('should render a comment icon for total reviews', () => {
    const elementToMatch = <FontAwesomeIcon icon={faComment} color="#A5A8AB" />;
    expect(
      user
        .find('FontAwesomeIcon')
        .at(1)
        .matchesElement(elementToMatch)
    ).toBeTruthy();
  });

  test('should render total reviews and ratings counts', () => {
    expect(
      user
        .find('#user-info')
        .children()
        .at(1)
        .text()
        .indexOf('12 ratings')
    ).toBeTruthy();

    expect(
      user
        .find('#user-info')
        .children()
        .at(1)
        .text()
        .indexOf('8 reviews')
    ).toBeTruthy();
  });
});
