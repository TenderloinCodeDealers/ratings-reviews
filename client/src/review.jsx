import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import User from './user';

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
    <div id="review-container">
      <User user={user[0]} helpfulness={helpfulness} />
      <div id="rating-date">
        {stars}
        &thinsp; · &thinsp;
        <TimeAgo date={last_updated} />
      </div>
      <p id="review-text">{review}</p>
      <button id="helpfulness-button" type="button">
        <FontAwesomeIcon icon={faThumbsUp} color="#a5a8ab" /> Helpful{' '}
        {helpfulness > 0 ? helpfulness : ''}
      </button>
    </div>
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
