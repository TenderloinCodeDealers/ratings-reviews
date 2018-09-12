import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TotalRatings = ({ total, average }) => {
  const stars = [];
  for (let index = 1; index <= 5; index += 1) {
    const color = index <= average ? 'gold' : 'grey';
    stars[index] = <FontAwesomeIcon key={`star-${index}`} icon={faStar} color={color} />;
  }
  return (
    <div color="blue">
      {stars}
      &emsp;(
      {total} Ratings)
    </div>
  );
};

TotalRatings.propTypes = {
  total: PropTypes.number.isRequired,
  average: PropTypes.number.isRequired
};

export default TotalRatings;
