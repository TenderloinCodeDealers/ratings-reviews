import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TotalRatings = ({ totalRatings, avgRatings }) => {
  const stars = [];
  for (let index = 1; index <= 5; index += 1) {
    const color = index <= avgRatings ? '#FDC038' : '#A5A8AB';
    stars[index] = (
      <FontAwesomeIcon className="star" key={`star-${index}`} icon={faStar} color={color} />
    );
  }
  return (
    <div id="total-ratings-container">
      {stars}
      &emsp;
      <span id="total-ratings-count">({totalRatings} Ratings)</span>
    </div>
  );
};

TotalRatings.propTypes = {
  totalRatings: PropTypes.number.isRequired,
  avgRatings: PropTypes.number.isRequired
};

export default TotalRatings;
