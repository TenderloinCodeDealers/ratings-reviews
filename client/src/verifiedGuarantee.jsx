import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons';

const VerifiedGuarantee = () => (
  <div>
    <FontAwesomeIcon icon={faBadgeCheck} color="#56A227" />
    <strong>100% Verified Reviews</strong>
    <p>All reviews are from people who have redeemed deals with this merchant.</p>
  </div>
);

export default VerifiedGuarantee;
