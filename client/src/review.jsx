import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ reviewObject }) => {
  const { user, rating, review, last_updated, helpfulness } = reviewObject;
  const stars = [];
  for (let index = 1; index <= 5; index += 1) {
    const color = index <= rating ? '#FDC038' : '#A5A8AB';
    stars[index] = (
      <FontAwesomeIcon className="star" key={`star-${index}`} icon={faStar} color={color} />
    );
  }

  return (
    <div>
      <h2>User Component goes here</h2>
      <div>
        {stars}
        &thinsp; · &thinsp;
        <TimeAgo date={last_updated} />
      </div>
      <p>{review}</p>
      <button type="button">Helpfulness {helpfulness}</button>
    </div>
  );
};

Review.propTypes = {
  reviewObject: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      reviews: PropTypes.number.isRequired,
      ratings: PropTypes.number.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    last_updated: PropTypes.string.isRequired,
    helpfulness: PropTypes.number.isRequired
  }).isRequired
};

export default Review;
