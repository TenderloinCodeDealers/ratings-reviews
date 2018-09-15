import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faComment } from '@fortawesome/free-solid-svg-icons';

const User = ({ user }) => {
  const { name, reviews, ratings } = user;
  let topReviewer;
  if (reviews >= 5) {
    topReviewer = <div>Top Reviewer</div>;
  }
  const nameArray = name.split(' ');
  const initials = nameArray[0][0] + nameArray[1][0];
  const initializedName = `${nameArray[0]} ${nameArray[1][0]}.`;

  return (
    <div>
      <div>{initials}</div>
      <div>
        <div>
          <h3>{initializedName}</h3>
          {topReviewer}
        </div>
        <div>
          <FontAwesomeIcon icon={faStar} color="#A5A8AB" /> {reviews}
          &emsp;
          <FontAwesomeIcon icon={faComment} color="#A5A8AB" /> {ratings}
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired
  }).isRequired
};

export default User;
