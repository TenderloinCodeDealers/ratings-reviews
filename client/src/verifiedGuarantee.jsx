import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons';

/* Styling */
const Container = styled.div`
  background-color: #f6f7f8;
  padding: 10px 0 10px 0;
  display: flex;
`;

const Check = styled.div`
  padding: 0 10px 0 10px;
  font-size: 40px;
  color: #56a227;
`;

const Description = styled.div`
  margin: 0;
  padding-top: 5px;
`;

const VerifiedGuarantee = () => (
  <Container>
    <Check>
      <FontAwesomeIcon id="guarantee-check" icon={faBadgeCheck} />
    </Check>
    <div>
      <strong>100% Verified Reviews</strong>
      <Description>
        All reviews are from people who have redeemed deals with this merchant.
      </Description>
    </div>
  </Container>
);

export default VerifiedGuarantee;
