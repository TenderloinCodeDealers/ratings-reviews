import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import User from './user';

/* Styling */
const Container = styled.div`
  padding: 15px 0;
`;

const Date = styled.div`
  padding-top: 10px;
`;

const Text = styled.p`
  margin: 0;
  padding: 5px 0;
`;

const Helpfulness = styled.button`
  border-color: #a5a8ab;
  color: #75787b;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 300;

  &:hover {
    background-color: #f6f7f8;
    cursor: pointer;
  }
`;

const Review = ({ reviewObject }) => {
  const { user, rating, review, last_updated, helpfulness } = reviewObject;
  const stars = [];
  for (let index = 1; index <= 5; index += 1) {
    const color = index <= rating ? '#FDC038' : '#A5A8AB';
    stars[index] = (
      <FontAwesomeIcon
        className="star"
        key={`${user[0]._id}-star-${index}`} // eslint-disable-line no-underscore-dangle
        icon={faStar}
        color={color}
      />
    );
  }

  return (
    <Container>
      <User user={user[0]} helpfulness={helpfulness} />
      <Date>
        {stars}
        &thinsp; · &thinsp;
        <TimeAgo date={last_updated} />
      </Date>
      <Text>{review}</Text>
      <Helpfulness>
        <FontAwesomeIcon icon={faThumbsUp} color="#a5a8ab" /> Helpful{' '}
        {helpfulness > 0 ? helpfulness : ''}
      </Helpfulness>
    </Container>
  );
};

Review.propTypes = {
  reviewObject: PropTypes.shape({
    user: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        reviews: PropTypes.number.isRequired,
        ratings: PropTypes.number.isRequired
      }).isRequired
    ),
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    last_updated: PropTypes.string.isRequired,
    helpfulness: PropTypes.number.isRequired
  }).isRequired
};

export default Review;
