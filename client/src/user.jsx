import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faComment } from '@fortawesome/free-solid-svg-icons';

/* Styling */
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px 0 8px 0;
`;

const Initials = styled.div`
  border-radius: 50%;
  height: 45px;
  width: 45px;
  background-color: #e6e7e8;
  color: #b8b5bb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  padding: 0 12px;
`;

const Name = styled.div`
  color: #000000;
  display: inline-block;
  font-weight: 600;
`;

const Badge = styled.div`
  color: #ffffff;
  background-color: #6655d3;
  font-size: 10px;
  text-align: center;
  display: inline-block;
  padding: 2px 5px;
  margin-left: 10px;
  border-radius: 2px;
`;

const User = ({ user, helpfulness }) => {
  const { name, reviews, ratings } = user;
  let badge;
  if (reviews >= 5) {
    badge = <Badge>TOP REVIEWER</Badge>;
  } else if (helpfulness >= 5) {
    badge = <Badge>HELPFUL REVIEWER</Badge>;
  }
  const nameArray = name.split(' ');
  const initials = nameArray[0][0] + nameArray[1][0];
  const initializedName = `${nameArray[0]} ${nameArray[1][0]}.`;

  return (
    <Container>
      <Initials>
        <span>{initials}</span>
      </Initials>
      <Info>
        <div>
          <Name>{initializedName}</Name>
          {badge}
        </div>
        <div>
          <FontAwesomeIcon icon={faStar} color="#A5A8AB" /> {ratings} rating &emsp;
          <FontAwesomeIcon icon={faComment} color="#A5A8AB" /> {reviews} review
        </div>
      </Info>
    </Container>
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
