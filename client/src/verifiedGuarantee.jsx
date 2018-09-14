import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons';

const VerifiedGuarantee = () => (
  <div id="guarantee-container">
    <FontAwesomeIcon id="guarantee-check" icon={faBadgeCheck} />
    <div>
      <strong>100% Verified Reviews</strong>
      <p id="guarantee-description">
        All reviews are from people who have redeemed deals with this merchant.
      </p>
    </div>
  </div>
);

export default VerifiedGuarantee;
