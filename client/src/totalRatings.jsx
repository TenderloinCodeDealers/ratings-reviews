import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/* Styling */
const Container = styled.div`
  margin-bottom: 10px;
`;

const Count = styled.span`
  line-height: 18px;
  font-size: 18px;
  color: #0093ea;
`;

const Star = styled.div`
  font-size: 17px;
  display: inline-block;
`;

const TotalRatings = ({ totalRatings, avgRatings }) => {
  const stars = [];
  for (let index = 1; index <= 5; index += 1) {
    const color = index <= avgRatings ? '#FDC038' : '#A5A8AB';
    stars[index] = (
      <Star key={`star-${index}`}>
        <FontAwesomeIcon icon={faStar} color={color} />
      </Star>
    );
  }
  return (
    <Container>
      {stars}
      &emsp;
      <Count>({totalRatings} Ratings)</Count>
    </Container>
  );
};

TotalRatings.propTypes = {
  totalRatings: PropTypes.number.isRequired,
  avgRatings: PropTypes.number.isRequired
};

export default TotalRatings;
