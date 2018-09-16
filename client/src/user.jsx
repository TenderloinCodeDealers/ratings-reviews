import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faComment } from '@fortawesome/free-solid-svg-icons';

const User = ({ user, helpfulness }) => {
  const { name, reviews, ratings } = user;
  let badge;
  if (reviews >= 5) {
    badge = <div id="badge">TOP REVIEWER</div>;
  } else if (helpfulness >= 5) {
    badge = <div id="badge">HELPFUL REVIEWER</div>;
  }
  const nameArray = name.split(' ');
  const initials = nameArray[0][0] + nameArray[1][0];
  const initializedName = `${nameArray[0]} ${nameArray[1][0]}.`;

  return (
    <div id="user-container">
      <div id="user-initials">
        <span>{initials}</span>
      </div>
      <div id="user-info">
        <div>
          <span id="user-name">{initializedName}</span>
          {badge}
        </div>
        <div>
          <FontAwesomeIcon icon={faStar} color="#A5A8AB" /> {ratings} rating &emsp;
          <FontAwesomeIcon icon={faComment} color="#A5A8AB" /> {reviews} review
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
  }).isRequired,
  helpfulness: PropTypes.number.isRequired
};

export default User;
