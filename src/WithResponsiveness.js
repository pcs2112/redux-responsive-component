import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDisplayName } from 'javascript-utils/lib/react';

const withResponsiveness = (WrappedComponent, stateName) => {
  const WithResponsiveness = props => (
    <WrappedComponent {...props} />
  );

  WithResponsiveness.propTypes = {
    mobile: PropTypes.bool.isRequired,
    tablet: PropTypes.bool.isRequired,
    phone: PropTypes.bool.isRequired,
    desktop: PropTypes.bool.isRequired,
    device: PropTypes.string.isRequired
  };

  WithResponsiveness.displayName = `WithResponsiveness(${getDisplayName(WrappedComponent)})`;

  return connect(state => ({ ...state[stateName] }))(WithResponsiveness);
};

export default withResponsiveness;
