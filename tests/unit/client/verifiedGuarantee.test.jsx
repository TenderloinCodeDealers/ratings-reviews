import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons';
import VerifiedGuarantee from '../../../client/src/verifiedGuarantee';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Verified Reviews Guarantee Component', () => {
  const verified = shallow(<VerifiedGuarantee />);

  test('should render component', () => {
    expect(verified.exists()).toBeTruthy();
  });

  test('should render a green check', () => {
    const elementToMatch = <FontAwesomeIcon icon={faBadgeCheck} />;
    expect(verified.find('FontAwesomeIcon').matchesElement(elementToMatch)).toBeTruthy();
  });
});
